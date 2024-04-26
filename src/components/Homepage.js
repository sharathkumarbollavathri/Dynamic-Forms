import React, { useState } from 'react';

export const Homepage = () => {
    const [selectTags, setSelectTags] = useState('');
    const [label, setLabel] = useState('');
    const [inputs, setInputs] = useState([]);
    const [options, setOptions] = useState([]);
    const [optionInput, setOptionInput] = useState([]);
    const [showSubmitbutton,setShowSubmitButton]=useState(false)

    const handleChange = (e) => {
        setSelectTags(e.target.value);
        setLabel(''); // Reset label when dropdown value changes
    };

    const handleLabelChange = (e) => {
        setLabel(e.target.value);
    };

    const handleOptionInputChange = (e) => {
        setOptionInput(e.target.value);
    };

    const addInput = () => {
        console.log('addInput working')

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
        if (selectTags === 'dropdown' && options.length <= 1){
            alert('Please add at least two options for the dropdown options.');
            return;
        }


        const newInput = {
            type: selectTags,
            label,
            options: options.slice() // Copy the options to the new input
        };

        setInputs([...inputs, newInput]);
        setLabel('');
        setOptions([]); // Clear the options list when adding a new input
        setShowSubmitButton(true)

    };
    const addOptions = (e) => {
        e.preventDefault();
        if (selectTags === 'checkbox' && optionInput.length <= 1) {
            alert('Please enter an option.');
            return;
        }
        if (selectTags === 'radio' && optionInput.length <= 1) {
            alert('Please enter an option.');
            return;
        }
        if (selectTags === 'dropdown' && optionInput.length <= 1) {
            alert('Please enter an option.');
            return;
        }

        setOptions([...options, optionInput]);
        setOptionInput(' ');
    };

    const handleCheckboxSubmit = (e) => {
        e.preventDefault();
        alert('Check Console for Data')
    }

    return (
        <div>
            <h1 className='mb-4'>React Dynamic Form</h1>
            <form>
                {/* <label htmlFor="tagselection">Select one Tag</label> */}
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
                {/* DropDown */}
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
                {/* Checkbox */}
                {
                    (selectTags === 'checkbox' && (
                        <div>

                            <label htmlFor="labelInput">Add label </label>
                            <input
                            className='mb-3 border rounded ms-2  me-5'
                                type="text"
                                id="labelInput"
                                name="labelInput"
                                value={label}
                                onChange={handleLabelChange}
                            // disabled={!selectTags}
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
                    ))
                }
                {/* Radio Button */}
                {
                    (selectTags === 'radio' && (
                        <div>
                            <label htmlFor="labelInput">Add label </label>
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
                    ))
                }

                <div>
                    {selectTags.length>=1 ? <button type="button" className='btn btn-primary' onClick={addInput}>Add input</button> : ' '}
                </div>

{/* displaying new form */}

                <ul>
                    {inputs.map((input, index) => (<>
                        <li key={index}>
                            <div className='mt-3 '>{input.label}</div>
                            {input.type === 'text' && <input type="text" />}
                            {input.type === 'textarea' && <textarea></textarea>}
                            {input.type === 'number' && <input type="number" />}  
                            {/* DropDown displaying */}
                            {input.type === 'dropdown' && (
                                <select className='border border-info border-3 rounded mt-1'>
                                    <option  value="select">select</option>
                                    {input.options.map((option, index) => (<>

                                        <option  key={index}>{option}</option>
                                    </>
                                    ))}
                                </select>
                            )}
                            {/* Check Box displaying */}
                            {input.type === 'checkbox' && (<>
                                <ul className='mt-1'>
                                    {input.options.map((option, index) => (<>
                                     {/* <li key={index}>  if we want to display row wise, we can use this*/}
                                        <input type="checkbox" className='me-2 ms-3' key={index}  />{option}
                                     {/* </li> */}
                                    </>
                                    ))}
                                </ul>

                            </>)}
                            {/* Radio button displaying */}
                            {input.type === 'radio' && (
                                <ul className='mt-1'>
                                    {input.options.map((option, index) => (
                                        <li key={index}>
                                            <input
                                            className='me-2 ms-3'
                                                type="radio"
                                                name={`radio_${input.label}`} // Use the same name for all radio buttons in the group
                                            />
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            )}


                        </li>
                    </>
                    ))}

                </ul>
                {showSubmitbutton && <button className='btn btn-primary' onClick={handleCheckboxSubmit}>Submit</button>}

            </form>
        </div>
    );
};

