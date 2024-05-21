import React, { useState, useEffect } from 'react';

export const Homepage = () => {
    const [selectTags, setSelectTags] = useState('');
    const [label, setLabel] = useState('');
    const [inputs, setInputs] = useState([]);
    const [options, setOptions] = useState([]);
    const [optionInput, setOptionInput] = useState('');
    const [showSubmitButton, setShowSubmitButton] = useState(false);
    const [inputValues, setInputValues] = useState({});
    const [message, setMessage] = useState('');
    const [validationMessages, setValidationMessages] = useState({});

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage('');
            }, 5000);
            return () => clearTimeout(timer); // Clear the timeout if the component unmounts
        }
    }, [message]);

    const handleChange = (e) => {
        setSelectTags(e.target.value);
        setLabel('');
        setOptions([]);
        setValidationMessages({});
    };

    const handleLabelChange = (e) => {
        setLabel(e.target.value);
        setValidationMessages({});
    };

    const handleOptionInputChange = (e) => {
        setOptionInput(e.target.value);
    };

    const handleInputChange = (e) => {
        const { name, type, value, checked } = e.target;
        setInputValues({
            ...inputValues,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const addInput = () => {
        let newValidationMessages = {};

        if (!label) {
            newValidationMessages.label = 'Please enter a label name.';
        }
        if (!selectTags) {
            newValidationMessages.selectTags = 'Please select a form type.';
        }
        if (selectTags === 'checkbox' && options.length <= 1) {
            newValidationMessages.options = 'Please add at least two options for the checkbox.';
        }
        if (selectTags === 'radio' && options.length <= 1) {
            newValidationMessages.options = 'Please add at least two options for the radio button.';
        }
        if (selectTags === 'dropdown' && options.length <= 1) {
            newValidationMessages.options = 'Please add at least two options for the dropdown.';
        }

        if (Object.keys(newValidationMessages).length > 0) {
            setValidationMessages(newValidationMessages);
            return;
        }

        const newInput = {
            type: selectTags,
            label,
            options: options.slice()
        };

        setInputs([...inputs, newInput]);
        setLabel('');
        setOptions([]);
        setShowSubmitButton(true);
        setValidationMessages({});
    };

    const addOptions = (e) => {
        e.preventDefault();
        if (!optionInput) {
            setValidationMessages({ ...validationMessages, optionInput: 'Please enter an option.' });
            return;
        }
        setOptions([...options, optionInput]);
        setOptionInput('');
        setValidationMessages({});
    };

    const handleCheckboxSubmit = (e) => {
        e.preventDefault();
        const newValidationMessages = {};

        for (const input of inputs) {
            if (!inputValues[`input_${inputs.indexOf(input)}`] && input.type !== 'checkbox' && input.type !== 'radio') {
                newValidationMessages[`input_${inputs.indexOf(input)}`] = `Please fill out the ${input.label} field.`;
            }
            if ((input.type === 'checkbox' || input.type === 'radio') && !input.options.some((_, idx) => inputValues[`input_${inputs.indexOf(input)}_${idx}`])) {
                newValidationMessages[`input_${inputs.indexOf(input)}`] = `Please select an option for ${input.label}.`;
            }
        }

        setValidationMessages(newValidationMessages);

        if (Object.keys(newValidationMessages).length === 0) {
            const submittedData = inputs.map((input, index) => {
                if (input.type === 'checkbox') {
                    return {
                        type: input.type,
                        label: input.label,
                        id: `input_${index}`,
                        value: input.options.filter((_, idx) => inputValues[`input_${index}_${idx}`])
                    };
                } else if (input.type === 'radio') {
                    return {
                        type: input.type,
                        label: input.label,
                        id: `input_${index}`,
                        value: input.options.find((_, idx) => inputValues[`input_${index}_${idx}`])
                    };
                } else {
                    return {
                        type: input.type,
                        label: input.label,
                        id: `input_${index}`,
                        value: inputValues[`input_${index}`]
                    };
                }
            });

            console.log(submittedData);
            setMessage('Check console for form data');
            setInputValues({});
        }
    };

    return (
        <div className="form-container container mt-5">
            <div className="main-form">
                <h1 className='mb-4'>React Dynamic Form</h1>
                <form>
                    <div className="mb-3">
                        <select name="tagselection" id="tagselection" value={selectTags} onChange={handleChange} className={`form-select ${validationMessages.selectTags ? 'is-invalid' : ''}`}>
                            <option value="">Select form type</option>
                            <option value="number">Number</option>
                            <option value="text">Text</option>
                            <option value="textarea">Textarea</option>
                            <option value="dropdown">Dropdown</option>
                            <option value="checkbox">Checkbox</option>
                            <option value="radio">Radio</option>
                        </select>
                        {validationMessages.selectTags && <div className="invalid-feedback">{validationMessages.selectTags}</div>}
                    </div>

                    {(selectTags === 'text' || selectTags === 'textarea' || selectTags === 'number') && (
                        <div className="mb-3">
                            <label htmlFor="labelInput" className='form-label'>Enter label name</label>
                            <input
                                className={`form-control ${validationMessages.label ? 'is-invalid' : ''}`}
                                type="text"
                                id="labelInput"
                                name="labelInput"
                                value={label}
                                onChange={handleLabelChange}
                                disabled={!selectTags}
                            />
                            {validationMessages.label && <div className="invalid-feedback">{validationMessages.label}</div>}
                        </div>
                    )}

                    {(selectTags === 'dropdown' || selectTags === 'checkbox' || selectTags === 'radio') && (
                        <div className="mb-3">
                            <label htmlFor="labelInput" className='form-label'>Add label</label>
                            <input
                                className={`form-control ${validationMessages.label ? 'is-invalid' : ''}`}
                                type="text"
                                id="labelInput"
                                name="labelInput"
                                value={label}
                                onChange={handleLabelChange}
                                disabled={!selectTags}
                            />
                            {validationMessages.label && <div className="invalid-feedback">{validationMessages.label}</div>}
                            
                            <label htmlFor="addOptions" className='form-label mt-2'>Add Options</label>
                            <div className="input-group mb-3">
                                <input
                                    className={`form-control ${validationMessages.optionInput ? 'is-invalid' : ''}`}
                                    type="text"
                                    id="addOptions"
                                    name="addOptions"
                                    value={optionInput}
                                    onChange={handleOptionInputChange}
                                />
                                <button onClick={addOptions} className='btn btn-info'>Add Option</button>
                                {validationMessages.optionInput && <div className="invalid-feedback d-block">{validationMessages.optionInput}</div>}
                            </div>
                            
                            <ul className="list-group">
                                {options.map((option, index) => (
                                    <li key={index} className="list-group-item">{option}</li>
                                ))}
                            </ul>
                            {validationMessages.options && <div className="invalid-feedback d-block">{validationMessages.options}</div>}
                        </div>
                    )}

                    <div>
                        {selectTags.length >= 1 ? <button type="button" className='btn btn-primary' onClick={addInput}>Add input</button> : ' '}
                    </div>
                </form>
            </div>
            <div className="created-forms mt-4">
                <ul className="list-group">
                    {inputs.map((input, index) => (
                        <li key={index} className="list-group-item">
                            <div className='mt-3'>{input.label}</div>
                            {input.type === 'text' && (
                                <div className="mb-3">
                                    <input type="text" className={`form-control ${validationMessages[`input_${index}`] ? 'is-invalid' : ''}`} name={`input_${index}`} value={inputValues[`input_${index}`] || ''} onChange={handleInputChange} />
                                    {validationMessages[`input_${index}`] && <div className="invalid-feedback">{validationMessages[`input_${index}`]}</div>}
                                </div>
                            )}
                            {input.type === 'textarea' && (
                                <div className="mb-3">
                                    <textarea className={`form-control ${validationMessages[`input_${index}`] ? 'is-invalid' : ''}`} name={`input_${index}`} value={inputValues[`input_${index}`] || ''} onChange={handleInputChange} />
                                    {validationMessages[`input_${index}`] && <div className="invalid-feedback">{validationMessages[`input_${index}`]}</div>}
                                </div>
                            )}
                            {input.type === 'number' && (
                                <div className="mb-3">
                                    <input type="number" className={`form-control ${validationMessages[`input_${index}`] ? 'is-invalid' : ''}`} name={`input_${index}`} value={inputValues[`input_${index}`] || ''} onChange={handleInputChange} />
                                    {validationMessages[`input_${index}`] && <div className="invalid-feedback">{validationMessages[`input_${index}`]}</div>}
                                </div>
                            )}
                            {input.type === 'dropdown' && (
                                <div className="mb-3">
                                    <select className={`form-select ${validationMessages[`input_${index}`] ? 'is-invalid' : ''}`} name={`input_${index}`} value={inputValues[`input_${index}`] || ''} onChange={handleInputChange}>
                                        <option value="">Select an option</option>
                                        {input.options.map((option, idx) => (
                                            <option key={idx} value={option}>{option}</option>
                                        ))}
                                    </select>
                                    {validationMessages[`input_${index}`] && <div className="invalid-feedback">{validationMessages[`input_${index}`]}</div>}
                                </div>
                            )}
                            {input.type === 'checkbox' && (
                                <div className="mb-3">
                                    {input.options.map((option, idx) => (
                                        <div key={idx} className="form-check">
                                            <input
                                                type="checkbox"
                                                className={`form-check-input ${validationMessages[`input_${index}`] ? 'is-invalid' : ''}`}
                                                name={`input_${index}_${idx}`}
                                                checked={!!inputValues[`input_${index}_${idx}`]}
                                                onChange={handleInputChange}
                                            />
                                            <label className="form-check-label">{option}</label>
                                        </div>
                                    ))}
                                    {validationMessages[`input_${index}`] && <div className="invalid-feedback d-block">{validationMessages[`input_${index}`]}</div>}
                                </div>
                            )}
                            {input.type === 'radio' && (
                                <div className="mb-3">
                                    {input.options.map((option, idx) => (
                                        <div key={idx} className="form-check">
                                            <input
                                                type="radio"
                                                className={`form-check-input ${validationMessages[`input_${index}`] ? 'is-invalid' : ''}`}
                                                name={`input_${index}`}
                                                value={option}
                                                checked={inputValues[`input_${index}`] === option}
                                                onChange={handleInputChange}
                                            />
                                            <label className="form-check-label">{option}</label>
                                        </div>
                                    ))}
                                    {validationMessages[`input_${index}`] && <div className="invalid-feedback d-block">{validationMessages[`input_${index}`]}</div>}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
                {showSubmitButton && <button className="btn btn-success mt-4" onClick={handleCheckboxSubmit}>Submit</button>}
                <br />
                {message && <div className="alert alert-info mt-2" style={{ display: 'inline-block' }}>{message}</div>}
            </div>
        </div>
    );
};

export default Homepage;




