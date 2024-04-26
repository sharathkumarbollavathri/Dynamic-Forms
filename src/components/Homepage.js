import React, { useState } from 'react';

export const Homepage = () => {
    const [selectTags, setSelectTags] = useState('');
    const [label, setLabel] = useState('');
    const [inputs, setInputs] = useState([]);
    const [options, setOptions] = useState([]);
    const [optionInput, setOptionInput] = useState('');
    const [showSubmitButton, setShowSubmitButton] = useState(false);
    const [inputValues, setInputValues] = useState({});

    const handleChange = (e) => {
        setSelectTags(e.target.value);
        setLabel('');
    };

    const handleLabelChange = (e) => {
        setLabel(e.target.value);
    };

    const handleOptionInputChange = (e) => {
        setOptionInput(e.target.value);
    };

    const handleInputChange = (e) => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
        });
    };

    const addInput = () => {
        if (!label || !selectTags) {
            alert('Please enter a label name and select a form type.');
            return;
        }
        if (selectTags === 'checkbox' && options.length <= 1) {
            alert('Please add at least two options for the checkbox.');
            return;
        }
        if (selectTags === 'radio' && options.length <= 1) {
            alert('Please add at least two options for the radio button.');
            return;
        }
        if (selectTags === 'dropdown' && options.length <= 1) {
            alert('Please add at least two options for the dropdown options.');
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
    };

    const addOptions = (e) => {
        e.preventDefault();
        if (!optionInput) {
            alert('Please enter an option.');
            return;
        }
        setOptions([...options, optionInput]);
        setOptionInput('');
    };

    const handleCheckboxSubmit = (e) => {
        e.preventDefault();
        const submittedData = inputs.map((input, index) => {
            return {
                type: input.type,
                label: input.label,
                id: `input_${index}`,
                value: inputValues[`input_${index}`] || input.options.filter(option => option.selected).map(option => option.value)
            };
        });
        console.log(submittedData);
    };

    return (
        <div>
            <h1 className='mb-4'>React Dynamic Form</h1>
            <form>
                <select name="tagselection" id="tagselection" value={selectTags} onChange={handleChange} className='border border-primary border-3 rounded mb-3'>
                    <option className='border-primary' value="">Select form type</option>
                    <option value="number">Number</option>
                    <option value="text">Text</option>
                    <option value="textarea">Textarea</option>
                    <option value="dropdown">Dropdown</option>
                    <option value="checkbox">Checkbox</option>
                    <option value="radio">Radio</option>
                </select>

                {(selectTags === 'text' || selectTags === 'textarea' || selectTags === 'number') && (
                    <div>
                        <label htmlFor="labelInput" className='mb-2'>Enter label name</label>
                        <br />
                        <input 
                            className='mb-3 border rounded'
                            type="text"
                            id="labelInput"
                            name="labelInput"
                            value={label}
                            onChange={handleLabelChange}
                            disabled={!selectTags}
                        />
                    </div>
                )}

                {selectTags === 'dropdown' && (
                    <div>
                        <label htmlFor="labelInput">Add label</label>
                        <input
                            className='mb-3 border rounded ms-2  me-5'
                            type="text"
                            id="labelInput"
                            name="labelInput"
                            value={label}
                            onChange={handleLabelChange}
                            disabled={!selectTags}
                        />
                        <label htmlFor="addOptions">Add Options</label>
                        <input
                            className='mb-3 border rounded ms-2 me-3'
                            type="text"
                            id="addOptions"
                            name="addOptions"
                            value={optionInput}
                            onChange={handleOptionInputChange}
                        />
                        <button onClick={addOptions} className='btn btn-info'>Add Option</button>
                        <ul>
                            {options.map((option, index) => (
                                <li key={index}>{option}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {(selectTags === 'checkbox' || selectTags === 'radio') && (
                    <div>
                        <label htmlFor="labelInput">Add label </label>
                        <input
                            className='mb-3 border rounded ms-2  me-5'
                            type="text"
                            id="labelInput"
                            name="labelInput"
                            value={label}
                            onChange={handleLabelChange}
                        />
                        <label htmlFor="addOptions">Add Options</label>
                        <input
                            className='mb-3 border rounded ms-2 me-3'
                            type="text"
                            id="addOptions"
                            name="addOptions"
                            value={optionInput}
                            onChange={handleOptionInputChange}
                        />
                        <button onClick={addOptions} className='btn btn-info'>Add Option</button>
                        <ul>
                            {options.map((option, index) => (
                                <li key={index}>{option}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <div>
                    {selectTags.length>=1 ? <button type="button" className='btn btn-primary' onClick={addInput}>Add input</button> : ' '}
                </div>

                <ul>
                    {inputs.map((input, index) => (
                        <li key={index}>
                            <div className='mt-3 '>{input.label}</div>
                            {input.type === 'text' && <input type="text" name={`input_${index}`} value={inputValues[`input_${index}`]} onChange={handleInputChange} />}
                            {input.type === 'textarea' && <textarea name={`input_${index}`} value={inputValues[`input_${index}`]} onChange={handleInputChange}></textarea>}
                            {input.type === 'number' && <input type="number" name={`input_${index}`} value={inputValues[`input_${index}`]} onChange={handleInputChange} />}  
                            {input.type === 'dropdown' && (
                                <select className='border border-info border-3 rounded mt-1' name={`input_${index}`} value={inputValues[`input_${index}`]} onChange={handleInputChange}>
                                    <option value="select">select</option>
                                    {input.options.map((option, idx) => (
                                        <option key={idx}>{option}</option>
                                    ))}
                                </select>
                            )}
                            {input.type === 'checkbox' && (
                                <ul className='mt-1'>
                                    {input.options.map((option, idx) => (
                                        <li key={idx}>
                                            <input type="checkbox" className='me-2 ms-3' value={option} onChange={handleInputChange} />{option}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {input.type === 'radio' && (
                                <ul className='mt-1'>
                                    {input.options.map((option, idx) => (
                                        <li key={idx}>
                                            <input type="radio" className='me-2 ms-3' name={`radio_${input.label}`} value={option} onChange={handleInputChange} />{option}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
                {showSubmitButton && <button className='btn btn-primary' onClick={handleCheckboxSubmit}>Submit</button>}
            </form>
        </div>
    );
};


