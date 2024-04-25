import React, { useState } from 'react';

export const Test = () => {
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
                                    {input.options.map((option, index) => (
                                        <option key={index}>{option}</option>
                                    ))}
                                </select>
                            )}
                        </li>
                    ))}
                </ul>
            </form>
        </div>
    );
};


// import React, { useState } from 'react'

// export const Test = () => {

//     const [formData, setFormData] = useState({ firstname: '', lastname: '' })

//     // const [firsttext, setFirstText] = useState('')
//     // const [secondText, setSecondtext] = useState('')
//     // const [display, setDisplay] = useState([])
//     // const handleFirstChange = (e) => {
//     //     setFirstText(e.target.value)
//     // }
//     // const handleLastChange = (e) => {
//     //     setSecondtext(e.target.value)
//     // }
//     // const handleClick = (e) => {
//     //     e.preventDefault()
//     //     setDisplay([firsttext, secondText])
//     // }

//     const handleInputChange = (e) => {
//         const { name, value } = e.target
//         setFormData({ ...formData, [name]: value })
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Firstname:', formData.firstname)
//         console.log('Lastname:', formData.lastname)
//     }
//     return (
//         <>
//             <h1>Test</h1>
//             <form >
//                 <label >
//                     <h2>Firstname: </h2><input type="text" name='firstname' value={formData.firstname} onChange={handleInputChange} />
//                 </label>
//                 <label htmlFor="">
//                     <h2>Lastname: </h2><input type="text" name='lastname' value={formData.lastname} onChange={handleInputChange} />
//                 </label>
//                 <br />
//                 <button type='submit' onClick={handleSubmit}>Submit</button>
//                 {
//                         <>
//                             <h1>Firstname text: {formData.firstname}</h1>
//                             <h1>Lastname text: {formData.lastname} </h1>
//                         </>
//                     }


//             </form>
//         </>
//     )
// }
