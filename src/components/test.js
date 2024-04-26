import { Homepage } from "./Homepage"

// This is component is just used for only testing my original component(Homepage)




// import React, { useState } from 'react';

// export const Test = () => {
//     const [selectTags, setSelectTags] = useState('');
//     const [label, setLabel] = useState('');
//     const [inputs, setInputs] = useState([]);
//     const [options, setOptions] = useState([]);
//     const [optionInput, setOptionInput] = useState([]);
//     const [showSubmitbutton, setShowSubmitButton] = useState(false);

//     const handleChange = (e) => {
//         setSelectTags(e.target.value);
//         setLabel(''); // Reset label when dropdown value changes
//     };

//     const handleLabelChange = (e) => {
//         setLabel(e.target.value);
//     };

//     const handleOptionInputChange = (e) => {
//         setOptionInput(e.target.value);
//     };

//     const addInput = () => {
//         // Your existing addInput logic
//     };

//     const addOptions = (e) => {
//         // Your existing addOptions logic
//     };

//     const handleCheckboxSubmit = (e) => {
//         e.preventDefault();
//         alert('Check Console for Data');
//     };

//     return (
//         <div>
//             <h1>React Dynamic Form</h1>
//             <form>
//                 {/* <label htmlFor="tagselection">Select one Tag</label> */}
//                 <select name="tagselection" id="tagselection" value={selectTags} onChange={handleChange} className='border border-primary border-3 rounded mb-3'>
//                     <option className='border-primary' value="">Select form type</option>
//                     <option value="number">Number</option>
//                     <option value="text">Text</option>
//                     <option value="textarea">Textarea</option>
//                     <option value="dropdown">Dropdown</option>
//                     <option value="checkbox">Checkbox</option>
//                     <option value="radio">Radio</option>
//                 </select>

//                 {(selectTags === 'text' || selectTags === 'textarea' || selectTags === 'number') && (
//                     <div>
//                         <label htmlFor="labelInput" className='mb-2'>Enter label name</label>
//                         <br />
//                         <input 
//                             className='mb-3 border rounded'
//                             type="text"
//                             id="labelInput"
//                             name="labelInput"
//                             value={label}
//                             onChange={handleLabelChange}
//                             disabled={!selectTags}
//                         />
//                     </div>
//                 )}
//                 {/* DropDown */}
//                 {selectTags === 'dropdown' && (
//                     <div>
//                         <label htmlFor="labelInput">Add label</label>
//                         <input
//                             className='mb-3 border rounded ms-2 me-5'
//                             type="text"
//                             id="labelInput"
//                             name="labelInput"
//                             value={label}
//                             onChange={handleLabelChange}
//                             disabled={!selectTags}
//                         />
//                         <label htmlFor="addOptions">Add Options</label>
//                         <input
//                             className='mb-3 border rounded ms-2 me-3'
//                             type="text"
//                             id="addOptions"
//                             name="addOptions"
//                             value={optionInput}
//                             onChange={handleOptionInputChange}
//                         />
//                         <button onClick={addOptions} className='btn btn-info'>Add Option</button>
//                         <ul className="list-unstyled">
//                             {options.map((option, index) => (
//                                 <li key={index}>{option}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}
//                 {/* Checkbox */}
//                 {
//                     (selectTags === 'checkbox' && (
//                         <div>

//                             <label htmlFor="labelInput">Add label </label>
//                             <input
//                                 className='mb-3 border rounded ms-2  me-5'
//                                 type="text"
//                                 id="labelInput"
//                                 name="labelInput"
//                                 value={label}
//                                 onChange={handleLabelChange}
//                             // disabled={!selectTags}
//                             />
//                             <label htmlFor="addOptions">Add Options</label>
//                             <input
//                                 className='mb-3 border rounded ms-2 me-3'
//                                 type="text"
//                                 id="addOptions"
//                                 name="addOptions"
//                                 value={optionInput}
//                                 onChange={handleOptionInputChange}
//                             />

//                             <button onClick={addOptions} className='btn btn-info'>Add Option</button>
//                             <ul className="list-unstyled">
//                                 {options.map((option, index) => (
//                                     <li key={index}>{option}</li>
//                                 ))}
//                             </ul>
//                         </div>
//                     ))
//                 }
//                 {/* Radio Button */}
//                 {
//                     (selectTags === 'radio' && (
//                         <div>
//                             <label htmlFor="labelInput">Add label </label>
//                             <input
//                                 className='mb-3 border rounded ms-2  me-5'
//                                 type="text"
//                                 id="labelInput"
//                                 name="labelInput"
//                                 value={label}
//                                 onChange={handleLabelChange}
//                                 disabled={!selectTags}
//                             />
//                             <label htmlFor="addOptions">Add Options</label>
//                             <input
//                                 className='mb-3 border rounded ms-2 me-3'
//                                 type="text"
//                                 id="addOptions"
//                                 name="addOptions"
//                                 value={optionInput}
//                                 onChange={handleOptionInputChange}
//                             />

//                             <button onClick={addOptions} className='btn btn-info'>Add Option</button>
//                             <ul className="list-unstyled">
//                                 {options.map((option, index) => (
//                                     <li key={index}>{option}</li>
//                                 ))}
//                             </ul>
//                         </div>
//                     ))
//                 }

//                 <div>
//                     {selectTags.length>=1 ? <button type="button" className='btn btn-primary' onClick={addInput}>Add input</button> : ' '}
//                 </div>

//                 <ul>
//                     {inputs.map((input, index) => (<>
//                         <li key={index}>
//                             <div className='mt-3 text-danger'>{input.label}</div>
//                             {input.type === 'text' && <input type="text" />}
//                             {input.type === 'textarea' && <textarea></textarea>}
//                             {input.type === 'number' && <input type="number" />}
//                             {input.type === 'dropdown' && (
//                                 <select className='border border-info border-3 rounded mt-1'>
//                                     <option  value="select">select</option>
//                                     {input.options.map((option, index) => (<>

//                                         <option  key={index}>{option}</option>
//                                     </>
//                                     ))}
//                                 </select>
//                             )}
//                             {input.type === 'checkbox' && (<>
//                                 <ul className='mt-1 list-unstyled'>
//                                     {input.options.map((option, index) => (<>
//                                      {/* <li key={index}>  if we want to display row wise, we can use this*/}
//                                         <input type="checkbox" className='me-2 ms-3' key={index}  />{option}
//                                      {/* </li> */}
//                                     </>
//                                     ))}
//                                 </ul>

//                             </>)}
//                             {input.type === 'radio' && (
//                                 <ul className='mt-1 list-unstyled'>
//                                     {input.options.map((option, index) => (
//                                         <li key={index}>
//                                             <input
//                                             className='me-2 ms-3'
//                                                 type="radio"
//                                                 name={`radio_${input.label}`} // Use the same name for all radio buttons in the group
//                                             />
//                                             {option}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             )}


//                         </li>
//                     </>
//                     ))}

//                 </ul>
//                 {showSubmitbutton && <button className='btn btn-primary' onClick={handleCheckboxSubmit}>Submit</button>}

//             </form>
//         </div>
//     );
// };




// import React, { useState } from 'react';

// export const Test = () => {
//     const [selectTags, setSelectTags] = useState('');
//     const [label, setLabel] = useState('');
//     const [inputs, setInputs] = useState([]);
//     const [options, setOptions] = useState([]);
//     const [optionInput, setOptionInput] = useState('');

//     const handleChange = (e) => {
//         setSelectTags(e.target.value);
//         setLabel(''); // Reset label when dropdown value changes
//     };

//     const handleLabelChange = (e) => {
//         setLabel(e.target.value);
//     };

//     const handleOptionInputChange = (e) => {
//         setOptionInput(e.target.value);
//     };

//     const addInput = () => {

//         if (!label || !selectTags) {
//             alert('Please enter a label name and select a form type.');
//             return;
//         }

//         const newInput = {
//             type: selectTags,
//             label,
//             options: options.slice() // Copy the options to the new input
//         };

//         setInputs([...inputs, newInput]);
//         setLabel('');
//         setOptions([]); // Clear the options list when adding a new input
//     };
//     const addOptions = (e) => {
//         e.preventDefault();
//         if (!optionInput) {
//             alert('Please enter an option.');
//             return;
//         }

//         setOptions([...options, optionInput]);
//         setOptionInput(' ');
//     };



//     return (
//         <div>
//             <h1>React Dynamic Form</h1>
//             <form>
//                 <div class="dropdown">
//                     <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
//                         Dropdown button
//                     </button>
//                     <ul class="dropdown-menu" value={selectTags} onChange={handleChange}>
//                         <li><a class="dropdown-item" href="#" value="">Select form type</a></li>
//                         <li><a class="dropdown-item" href="#" value="number">Number</a></li>
//                         <li><a class="dropdown-item" href="#" value="text">Text</a></li>
//                         <li><a class="dropdown-item" href="#" value="textarea">Textarea</a></li>
//                         <li><a class="dropdown-item" href="#" value="dropdown">Dropdown</a></li>
//                         <li><a class="dropdown-item" href="#" value="checkbox">Checkbox</a></li>
//                         <li><a class="dropdown-item" href="#" value="radio">Radio</a></li>
//                     </ul>
//                 </div>
//                 {/* <label htmlFor="tagselection">Select one Tag</label>
//                 <select name="tagselection" id="tagselection" value={selectTags} onChange={handleChange}>
//                     <option value="">Select form type</option>
//                     <option value="number">Number</option>
//                     <option value="text">Text</option>
//                     <option value="textarea">Textarea</option>
//                     <option value="dropdown">Dropdown</option>
//                     <option value="checkbox">Checkbox</option>
//                     <option value="radio">Radio</option>
//                 </select> */}

//                 {(selectTags === 'text' || selectTags === 'textarea' || selectTags === 'number') && (
//                     <div>
//                         <label htmlFor="labelInput">Enter Label Name:</label>
//                         <input
//                             type="text"
//                             id="labelInput"
//                             name="labelInput"
//                             value={label}
//                             onChange={handleLabelChange}
//                             disabled={!selectTags}
//                         />
//                     </div>
//                 )}

//                 {selectTags === 'dropdown' && (
//                     <div>
//                         <label htmlFor="labelInput">Enter Label Name:</label>
//                         <input
//                             type="text"
//                             id="labelInput"
//                             name="labelInput"
//                             value={label}
//                             onChange={handleLabelChange}
//                             disabled={!selectTags}
//                         />
//                         <label htmlFor="addOptions">Add Options:</label>
//                         <input
//                             type="text"
//                             id="addOptions"
//                             name="addOptions"
//                             value={optionInput}
//                             onChange={handleOptionInputChange}
//                         />
//                         <button onClick={addOptions}>Add Option</button>
//                         <ul>
//                             {options.map((option, index) => (
//                                 <li key={index}>{option}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}
//                 {
//                     (selectTags === 'checkbox' && (
//                         <div>

//                             <label htmlFor="labelInput">Enter Label Name: </label>
//                             <input
//                                 type="text"
//                                 id="labelInput"
//                                 name="labelInput"
//                                 value={label}
//                                 onChange={handleLabelChange}
//                                 disabled={!selectTags}
//                             />
//                             <label htmlFor="addOptions">Add Options:</label>
//                             <input
//                                 type="text"
//                                 id="addOptions"
//                                 name="addOptions"
//                                 value={optionInput}
//                                 onChange={handleOptionInputChange}
//                             />

//                             <button onClick={addOptions}>Add Option</button>
//                             <ul>
//                                 {options.map((option, index) => (
//                                     <li key={index}>{option}</li>
//                                 ))}
//                             </ul>
//                         </div>
//                     ))
//                 }
//                 {
//                     (selectTags === 'radio' && (
//                         <div>
//                             <label htmlFor="labelInput">Enter Label Name: </label>
//                             <input
//                                 type="text"
//                                 id="labelInput"
//                                 name="labelInput"
//                                 value={label}
//                                 onChange={handleLabelChange}
//                                 disabled={!selectTags}
//                             />
//                         </div>
//                     ))
//                 }

//                 <div>
//                     <button type="button" onClick={addInput}>Add input</button>
//                 </div>

//                 <ul>
//                     {inputs.map((input, index) => (
//                         <li key={index}>
//                             <div>{input.label}</div>
//                             {input.type === 'text' && <input type="text" />}
//                             {input.type === 'textarea' && <textarea></textarea>}
//                             {input.type === 'number' && <input type="number" />}
//                             {input.type === 'dropdown' && (
//                                 <select>
//                                     <option value="select">select</option>
//                                     {input.options.map((option, index) => (<>

//                                         <option key={index}>{option}</option>
//                                     </>
//                                     ))}
//                                 </select>
//                             )}
//                             {input.type === 'checkbox' && <input type='checkbox' />}
//                             {input.type === 'radio' && <input type='radio' />}
//                         </li>
//                     ))}
//                 </ul>
//             </form>
//         </div>
//     );
// };


// import React, { useState } from 'react';

// export const Test = () => {
//     const [selectTags, setSelectTags] = useState('');
//     const [label, setLabel] = useState('');
//     const [inputs, setInputs] = useState([]);
//     const [options, setOptions] = useState([]);
//     const [optionInput, setOptionInput] = useState('');

//     const handleChange = (e) => {
//         setSelectTags(e.target.value);
//         setLabel(''); // Reset label when dropdown value changes
//     };

//     const handleLabelChange = (e) => {
//         setLabel(e.target.value);
//     };

//     const handleOptionInputChange = (e) => {
//         setOptionInput(e.target.value);
//     };

//     const addInput = () => {
//         if (!label || !selectTags) {
//             alert('Please enter a label name and select a form type.');
//             return;
//         }

//         const newInput = {
//             type: selectTags,
//             label,
//             options: options.slice() // Copy the options to the new input
//         };

//         setInputs([...inputs, newInput]);
//         setLabel('');
//         setOptions([]); // Clear the options list when adding a new input
//     };

//     const addOptions = (e) => {
//         e.preventDefault();
//         if (!optionInput) {
//             alert('Please enter an option.');
//             return;
//         }

//         setOptions([...options, optionInput]);
//         setOptionInput(' ');
//     };

//     return (
//         <div>
//             <h1>React Dynamic Form</h1>
//             <form>
//                 <label htmlFor="tagselection">Select one Tag</label>
//                 <select name="tagselection" id="tagselection" value={selectTags} onChange={handleChange}>
//                     <option value="">Select form type</option>
//                     <option value="number">Number</option>
//                     <option value="text">Text</option>
//                     <option value="textarea">Textarea</option>
//                     <option value="dropdown">Dropdown</option>
//                     <option value="checkbox">Checkbox</option>
//                     <option value="radio">Radio</option>
//                 </select>

//                 {(selectTags === 'text' || selectTags === 'textarea' || selectTags === 'number') && (
//                     <div>
//                         <label htmlFor="labelInput">Enter Label Name:</label>
//                         <input
//                             type="text"
//                             id="labelInput"
//                             name="labelInput"
//                             value={label}
//                             onChange={handleLabelChange}
//                             disabled={!selectTags}
//                         />
//                     </div>
//                 )}

//                 {selectTags === 'dropdown' && (
//                     <div>
//                         <label htmlFor="labelInput">Enter Label Name:</label>
//                         <input
//                             type="text"
//                             id="labelInput"
//                             name="labelInput"
//                             value={label}
//                             onChange={handleLabelChange}
//                             disabled={!selectTags}
//                         />
//                         <label htmlFor="addOptions">Add Options:</label>
//                         <input
//                             type="text"
//                             id="addOptions"
//                             name="addOptions"
//                             value={optionInput}
//                             onChange={handleOptionInputChange}
//                         />
//                         <button onClick={addOptions}>Add Option</button>
//                         <ul>
//                             {options.map((option, index) => (
//                                 <li key={index}>{option}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}

//                 <div>
//                     <button type="button" onClick={addInput}>Add input</button>
//                 </div>

//                 <ul>
//                     {inputs.map((input, index) => (
//                         <li key={index}>
//                             <div>{input.label}</div>
//                             {input.type === 'text' && <input type="text" />}
//                             {input.type === 'textarea' && <textarea></textarea>}
//                             {input.type === 'number' && <input type="number" />}
//                             {input.type === 'dropdown' && (
//                                 <select>
//                                     <option value="select">select</option>
//                                     {input.options.map((option, index) => (
//                                         <option key={index}>{option}</option>
//                                     ))}
//                                 </select>
//                             )}
//                         </li>
//                     ))}
//                 </ul>
//             </form>
//         </div>
//     );
// };


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
