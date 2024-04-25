import React, { useState } from 'react';

export const Homepage = () => {
    const [selectTags, setSelectTags] = useState('');
    const [label, setLabel] = useState('');
    const [inputs, setInputs] = useState([]);
    const [options, setOptions] = useState([]);
    const [optionInput, setOptionInput] = useState('');

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
        
        if (!label || !selectTags) {
            alert('Please enter a label name and select a form type.');
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
    };
    const addOptions = (e) => {
        e.preventDefault();
        if (!optionInput) {
            alert('Please enter an option.');
            return;
        }

        setOptions([...options, optionInput]);
        setOptionInput(' ');
    };



    return (
        <div>
            <h1>React Dynamic Form</h1>
            <form>
                <label htmlFor="tagselection">Select one Tag</label>
                <select name="tagselection" id="tagselection" value={selectTags} onChange={handleChange}>
                    <option value="">Select form type</option>
                    <option value="number">Number</option>
                    <option value="text">Text</option>
                    <option value="textarea">Textarea</option>
                    <option value="dropdown">Dropdown</option>
                    <option value="checkbox">Checkbox</option>
                    <option value="radio">Radio</option>
                </select>

                {(selectTags === 'text' || selectTags === 'textarea' || selectTags === 'number') && (
                    <div>
                        <label htmlFor="labelInput">Enter Label Name:</label>
                        <input
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
                        <label htmlFor="labelInput">Enter Label Name:</label>
                        <input
                            type="text"
                            id="labelInput"
                            name="labelInput"
                            value={label}
                            onChange={handleLabelChange}
                            disabled={!selectTags} 
                        />
                        <label htmlFor="addOptions">Add Options:</label>
                        <input 
                            type="text"
                            id="addOptions"
                            name="addOptions"
                            value={optionInput}
                            onChange={handleOptionInputChange}
                        />
                        <button onClick={addOptions}>Add Option</button>
                        <ul>
                            {options.map((option, index) => (
                                <li key={index}>{option}</li>
                            ))}
                        </ul>
                    </div>
                )}
                {
                    (selectTags==='checkbox' && (
                        <div>
                            
                            <label htmlFor="labelInput">Enter Label Name: </label>
                            <input
                            type="text"
                            id="labelInput"
                            name="labelInput"
                            value={label}
                            onChange={handleLabelChange}
                            disabled={!selectTags} 
                        />
                        <label htmlFor="addOptions">Add Options:</label>
                        <input 
                            type="text"
                            id="addOptions"
                            name="addOptions"
                            value={optionInput}
                            onChange={handleOptionInputChange}
                        />
                        
                        <button onClick={addOptions}>Add Option</button>
                        <ul>
                            {options.map((option, index) => (
                                <li key={index}>{option}</li>
                            ))}
                        </ul>
                       </div>
                    ))
                }
                {
                    (selectTags==='radio' &&(
                        <div>
                            <label htmlFor="labelInput">Enter Label Name: </label>
                            <input
                            type="text"
                            id="labelInput"
                            name="labelInput"
                            value={label}
                            onChange={handleLabelChange}
                            disabled={!selectTags} 
                        />
                        </div>
                    ))
                }

                <div>
                    <button type="button" onClick={addInput}>Add input</button>
                </div>

                <ul>
                    {inputs.map((input, index) => (
                        <li key={index}>
                            <div>{input.label}</div>
                            {input.type === 'text' && <input type="text" />}
                            {input.type === 'textarea' && <textarea></textarea>}
                            {input.type === 'number' && <input type="number" />}
                            {input.type === 'dropdown' && (
                                <select>
                                    <option value="select">select</option>
                                    {input.options.map((option, index) => (<>
                                        
                                        <option key={index}>{option}</option>
                                        </>
                                    ))}
                                </select>
                            )}
                            {input.type==='checkbox' && <input type='checkbox'/>}
                            {input.type==='radio' && <input type='radio'/>}
                        </li>
                    ))}
                </ul>
            </form>
        </div>
    );
};

