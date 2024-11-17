import React ,{useState } from 'react'; 
import {IconButton }from "@material-tailwind/react";  





function DynamicTable (initialBooks ,onDelete ,){ 
  const [tableData ,setTableData ]=useState ([ 
        
    
    {id :12,titles :'The Lord of the Rings',author :'J.R.R. Tolkien', description :'A high epic legend ',sold :150000000},{id :1,titles :"Harry Potter and the Sorcerer's Stone", author :'J.K. Rowling' }, 
        
    
    
    
    {titles :'Pride and Prejudice',author :'Jane Austen'},{id :2,titles :"Martian ",author :"Andy Weir "},]); 

  const handleAddRow =()=>{ 
    const newRow = { id: Date.now(), name: '', age: '' };
    setTableData([...tableData, newRow]);
  }; 

  const handleDeleteRow =(id  )=>{ 
    const updatedData = tableData.filter((row) => row.id !== id);
    setTableData(updatedData);
  }; 

//   const handleChange = (e, id) => {
    // const updatedData = tableData.map((row) => {
    //   if (row.id ===id ){ 
        // return { ...row, [e.target.name]: e.target.value };
    //   } 
    //   return row ; 
    // }); 
    // setTableData (updatedData ); 
//   }; 
//   const [newBook ,setNewBook ]=useState ({ 
    // title :'', 
    // author :'', 
    // description :'', 
    // sold :0, 
//   }); 


  const [showdialog ,setShowDialog ]= useState (false ) 
  const handleBook =(newBooklist )=>{ 
    
    
    
    setTableData ([...tableData ,newBook ]); 
    setShowDialog (false ); 
    console.log (newBook.title ) 
    console.log (newBook.author ) 
    console.log (newBook.description ) 
    console.log (showdialog ) 
    setShowDialog (false ); 
}; 
  const openDialog =()=>{ 
    setShowDialog (true ); 
  }; 
  
  const [isDialogOpen ,setIsDialogOpen ]=useState (false ); 
  
  const handleAdd =()=>{setIsDialogOpen (true );};
  
  const handleCloseDialog =()=>{setIsDialogOpen (false );}; 
  
//   const handleAddBook =(newBook )=>{setTableData ([...tableData ,newBook ]);setIsDialogOpen (false );} 
  
const [newBookTitle ,setNewBookTitle ]=useState (''); 
const handleAddBook =()=>{ 
    const newBook ={ 
      id :Date.now (), 
      title :newBookTitle , 
      // ... other fields (description, genre, pages, authors)
    }; 
    setTableData ([...tableData ,newBook ]); 
    setIsDialogOpen (false ); 
    setNewBookTitle (''); 
    
    
    
    
    
    
    
    
    
    
    // onAdd (newBook );// Call the onAdd function from the parent component 
  console.log (newBook.id )}; 

// const handleChange =(event )=>{setNewBook ({...newBook ,[event.target.name ]:event.target.value });}; 
const [formData, setFormData] = useState({
    title: '',
    description: '',
    author: '',
  });   
const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  
const [newBook ,setNewBook ]=useState ({ 
    title :'', 
    description :'', 
    genre :'', 
    pages :'', 
    authors :[], 
  }); 
  
  const handleDelete = (indexes  )=>{ 
    const updatedData =tableData.filter (item =>item.indexes !==indexes );setTableData (updatedData ); 
    // alert ("inside delete ",indexes ,"id  ")    
    // console.log ("id is ",indexes ) 
}; 

  
  
const handleDeleteItem =(index )=>{ 
    const updatedArray =tableData .filter ((item ,i )=>i !==index ); 
    setTableData (updatedArray ); 
    // console.log (index ); 
    // alert (index ); 
  }; 
  const [formErrors ,setFormErrors ]=useState({ 
    
    description :"Please type the Description of this book ",title :"", 

    author :"",pages :""}) 
//   const handleSubmit =(event )=>{ 
    // event.preventDefault ();setIsDialogOpen (false ); 

    // if (form ){ 
        // const newFormData ={ 
    //   id :Math.floor (Math.random ()*10000), 
    //   title: form.elements.titles.value,
    
    // description :form.elements.description.value,
    // author: form.elements.author.value,
    // pages :0, // Assuming initial pages is 0 
    // genres :0, // Assuming initial genres is 0 
      //   title: event.target.titles.value , 
    //   description: event.target.description.value,
    //   author: event.target.author.value , 
    // //   sold: 0,//Assuming initial sold value is 0 
    //   pages :0, 
    //   genres :0, 
    // }; 

    //setTableData ([...tableData ,newFormData ]); 
    //event.target.reset (); 
    //const errors ={}; 
    //if (!event.target.description.value ){ 
      //errors.description = 'Description is required';
    // } 

    // setFormErrors (errors ); 

    
    // if (Object.keys(errors).length === 0) {
      // Submit form data
      // ...
    // } 
//   }
  //else {console.log ("Form element not found ")}}; 
  
  
  const handleSubmit =(event )=>{ 
    event.preventDefault (); 

    const newFormData ={ 
      id :Math.floor (Math.random ()*10000), 
      title: event.target.titles.value,
      description: event.target.description.value,
      author: event.target.author.value , 
    //   sold: 0,//Assuming initial sold value is 0 
      pages :0, 
      genres :0, 
    }; 

    setFormDataArray ([...formDataArray ,newFormData ]); 
    event.target.reset (); 
  };const [formDataArray ,setFormDataArray ] = useState([]); 
  return ( 
    
    
    <div ><table className ="w -1/2"> 
      
      <thead ><tr  > 
         
            <th class ="p-4 border-b border-slate-600 bg-slate-700">
                <p class ="text-sm font-normal leading-none text-slate-300"> 








                Serial No. 
                </p > 
            </th > 
            <th class ="p-4 border-b border-slate-600 bg-slate-700"> 
                <p class="text-sm font-normal leading-none text-slate-300"> 
                    Book Titles 
                </p > 
            </th > 
            <th class ="p-4 border-b border-slate-600 bg-slate-700"> 
                <p class ="text-sm font-normal leading-none text-slate-300">
                   Authors 
                </p > 
            </th > 
            <th class="p-4 border-b border-slate-600 bg-slate-700">
                <p class ="text-sm font-normal leading-none text-slate-300">
                   Description 
                </p > 
            </th > 
            <th class="p-4 border-b border-slate-600 bg-slate-700">
                <p class ="text-sm font-normal leading-none text-slate-300">
                   Genres 
                </p > 
            </th > 
            <th class="p-4 border-b border-slate-600 bg-slate-700">
                <p class ="text-sm font-normal leading-none text-slate-300">
                   Pages 
                </p > 
            </th > 
            <th class="p-4 border-b border-slate-600 bg-slate-700">
                <p class ="text-sm font-normal leading-none text-slate-300">
                   Actions 
                </p > 
            </th > 
            </tr > 
            
            </thead > 
        {/* <thead > 
          <tr > 
            <th class ="p-4 border-b border-slate-600 bg-slate-700">Serial No.</th>
            <th class ="p-4 border-b border-slate-600 bg-slate-700">Book Title</th>
            <th class ="p-4 border-b border-slate-600 bg-slate-700">Description</th>
            <th class ="p-4 border-b border-slate-600 bg-slate-700">Genre</th>
            <th className="p-4 border-b border-slate-600 bg-slate-600">Pages</th>
            <th className="p-4 border-b border-slate-600 bg-slate-600">Authors</th>
            <th className="p-4 border-b border-slate-600 bg-slate-600">Actions</th>
          </tr > 
        </thead >  */} 

        <tbody > 
          {tableData.map ((book ,indexes )=>( 
            <tr key ={indexes }> 
              <td className ="p-4 border-b border-slate-700 bg-slate-900"><p class ="text-sm text-slate-100 font-semibold">{indexes +1}</p ></td > 
              <td className="p-4 border-b border-slate-700 bg-slate-800"><p class ="text-sm text-slate-100 font-semibold">{tableData [indexes ].titles }</p ></td > 
              <td className="p-4 border-b border-slate-700 bg-slate-900"><p class ="text-sm text-slate-100 font-semibold">{tableData [indexes ].author }</p ></td > 
              <td className ="p-4 border-b border-slate-700 bg-slate-800"><p class ="text-sm text-slate-100 font-semibold">{tableData [indexes ].description }</p ></td > 
              <td className ="p-4 border-b border-slate-700 bg-slate-900"><p class ="text-sm text-slate-100 font-semibold">{tableData [indexes ].genres }</p ></td > 
              <td className="p-4 border-b border-slate-700 bg-slate-800"><p class ="text-sm text-slate-100 font-semibold">{tableData [indexes ].page }</p ></td > 
              <td className ="p-4 border-b border-slate-700 bg-slate-900"> 
                {indexes }<button 
                  className ="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" 
                //   onClick ={()=>onDelete (book.id )} 
                onClick ={()=>handleDeleteItem (indexes )} 
                > 
                  Delete 
                </button > 
                </td > 
              
            </tr > 
          ))} 
        </tbody > 
      </table>
      <button 
        className ="text-white bg-red-800 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-400 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 mt-2" 
        // className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick ={handleAdd }   

      > 
        Add More 
      </button > 
        
        
        
        
        
        
        
        

      {isDialogOpen &&( 
        
        <div className ="fixed inset-0 z-50 flex items-center justify-center"> 
         <div className ="bg-white p-6 rounded shadow-md"> 
          
          <form onSubmit  ={handleSubmit } >  
          <div className =""><input type ="text" name="titles" placeholder="Title"required /></div > 
          <div className =""><input 
          type ="text  " 
          name ="description" 
          placeholder ="Description" 
          //   class ="... invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-700" 
          className ={`border ${formErrors.description ? 'border-red-500':""}`} 
          required 
          /> 
          <span 
          class ="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block"> 
            Adding Description is required 
            </span > 
            </div > 
          <div className =""><input type ="text" name ="author " placeholder ="Author "/></div > 
          <div className =""><input type ="text" name ="" placeholder ="Genres "/></div > 
          
          {/* <button onClick ={()=>setIsDialogOpen (false )}>Exit </button >  */} 
          
          {/* <button type ="submit">Submit </button>    */} 
          <div className ="flex items-center gap-4"> 
          <button onClick ={()=>setIsDialogOpen (false )} 
          className ="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 pl-4 pr-4"> 
            Exit 
            </button > 
          <button type ="submit" 
          className ="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> 
            Add Book </button > 
            </div > 
          </form >
          
        </div > 
        </div > 
      )} 
</div > 
  ); 
}; 
function MyForm (){ 
  const [formData ,setFormData ]=useState ({ 
    name: '',
    email: '',
    age: 0
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();   

    
    console.log(formData ); 

    // Reset the form (optional)
    setFormData({
      name: '',
      email: '',
      age: 0 
    }); 
  }; 

  return ( 
    <><form onSubmit ={handleSubmit }> 
      <input type="text" name="name" value={formData.name} onChange={handleChange} />
      <input type="email" name="email" value={formData.email} onChange={handleChange}   
 /> 
      <input type="number" name="age" value={formData.age} onChange={handleChange} />
      <button type="submit">Submit</button>
      <p ></p > 
    </form ><p >{formData .email }{formData .name }</p ></ > 
  ); 
} 
function AppendingForm (){ 
    const [formDataArray ,setFormDataArray ]=useState ([ 
        {id :12,titles :'The Lord of the Rings',author :'J.R.R. Tolkien', description :'A high epic legend',sold :150000000 }, 
        {id :1,titles :"Harry Potter and the Sorcerer's Stone",author :'J.K. Rowling' }, 
      ]); 
    
      const handleSubmit =(event )=>{ 
        event.preventDefault ();setIsDialogOpen (false );  
    
        const newFormData ={ 
          id :Math.floor (Math.random ()*10000), 
          titles :event.target.titles.value, 
          description: event.target.description.value,
          author: event.target.author.value , 
        //   sold: 0,//Assuming initial sold value is 0 
          pages :0, 
          genres :0, 
        }; 
    
        setFormDataArray ([...formDataArray ,newFormData ]); 
        event.target.reset (); 
      }; 
    
      const handleDeleteItem =(index )=>{ 
        const updatedArray = formDataArray.filter((item, i) => i !== index ); 
        setFormDataArray (updatedArray ); 
      }; 
      const [isDialogOpen ,setIsDialogOpen ]=useState (false ); 
    
      return ( 
        <div class =""> 
        {/* <button 
        className ="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" 
        onClick ={()=>setIsDialogOpen (true )}> 
            Open Add Book Form </button >  */} 
         {isDialogOpen &&( 
                
                <div className ="fixed inset-0 z-50 flex items-center justify-center"> 
         <div className ="bg-white p-6 rounded shadow-md"> 
          
          <form onSubmit  ={handleSubmit } >  
          <div className =""><input type ="text" name="titles" placeholder="Title"required /></div > 
          <div className =""><input 
          type ="text  " 
          name ="description" 
          placeholder ="Description" 
          //   class ="... invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-700" 
        //   className ={`border ${formErrors.description ? 'border-red-500':""}`} 
          required 
          /> 
          
            </div > 
          <div className =""><input type ="text" name ="author"placeholder ="Author "/></div > 
          <div className =""><input type ="text" name ="generes "placeholder ="Genres "/></div > 
          
          {/* <button onClick ={()=>setIsDialogOpen (false )}>Exit </button >  */} 
          
          {/* <button type ="submit">Submit </button>    */} 
          <div className ="flex items-center gap-4"> 
          <button onClick ={()=>setIsDialogOpen (false )} 
          className ="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 pl-4 pr-4"> 
            Exit 
            </button > 
          <button type ="submit" 
          className ="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> 
            Add Book </button > 
            </div > 
          </form >
          
        </div > 
        </div > 
                
                
                
                
                
                
                
                
                
                
                
                //<Dialog onClose ={()=>setIsDialogOpen (false )}> 
        //   <form onSubmit  ={handleSubmit }>  
        //   <input type ="text" name="titles" placeholder="Title" /> 
        //   <input type ="text" name="description" placeholder="Description"/> 
        //   <input type ="text" name="author" placeholder="Author" /> 
        //   {/* <button onClick ={()=>setIsDialogOpen (false )}>Exit </button >  */} 
          
        //   <button type ="submit">Submit </button>   
          
        //   <button onClick ={()=>setIsDialogOpen (false )}>Exit </button > 
          
        //   </form > 
          
        //   </Dialog > 
        )} 
    
          {/* <ul > 
            {formDataArray.map ((formData ,index )=>( 
              <li key ={index }> 
                {index + 1}.Title :{formData.titles },Descriptions :{formData.description}, Author :{formData.author } 
                <button onClick ={()=>handleDeleteItem (index )}>Delete </button > 
              </li > 
            ))} 
          </ul > */} 
        {/* </form >  */}  
        <table className ="w-1/2"> 
      <thead ><tr  > 
         
            <th class ="p-4 border-b border-slate-600 bg-slate-700"> 
                <p class ="text-sm font-normal leading-none text-slate-300"> 
                Serial No. 
                </p > 
            </th > 
            <th class ="p-4 border-b border-slate-600 bg-slate-700"> 
                <p class ="text-sm font-normal leading-none text-slate-300">
                    Book Titles 
                </p > 
            </th > 
            <th class="p-4 border-b border-slate-600 bg-slate-700">
                <p class="text-sm font-normal leading-none text-slate-300">
                   Authors 
                </p > 
            </th > 
            <th class="p-4 border-b border-slate-600 bg-slate-700"> 
                <p class ="text-sm font-normal leading-none text-slate-300">
                   Description 
                </p > 
            </th > 
            {/* <th class="p-4 border-b border-slate-600 bg-slate-700">
                <p class ="text-sm font-normal leading-none text-slate-300">
                   Genres 
                </p > 
            </th >  */} 
            <th class="p-4 border-b border-slate-600 bg-slate-700">
                <p class ="text-sm font-normal leading-none text-slate-300">
                   Pages 
                </p > 
            </th > 
            <th class="p-4 border-b border-slate-600 bg-slate-700"> 
                <p class ="text-sm font-normal leading-none text-slate-300"> 
                   Actions 
                </p > 
            </th > 
            </tr > 
            
            </thead > 
            <tbody > 
          {formDataArray .map ((book ,indexes )=>( 
            <tr key ={indexes }> 
              <td className ="p-4 border-b border-slate-700 bg-slate-900"><p class ="text-sm text-slate-100 font-semibold">{indexes +1}</p ></td > 
              <td className="p-4 border-b border-slate-700 bg-slate-800"><p class ="text-sm text-slate-100 font-semibold">{formDataArray  [indexes ].titles }</p ></td > 
              <td className="p-4 border-b border-slate-700 bg-slate-900"><p class ="text-sm text-slate-100 font-semibold">{formDataArray  [indexes ].author }</p ></td > 
              <td className ="p-4 border-b border-slate-700 bg-slate-800"><p class ="text-sm text-slate-100 font-semibold">{formDataArray  [indexes ].description }</p ></td > 
              
              {/* <td className ="p-4 border-b border-slate-700 bg-slate-900"><p class ="text-sm text-slate-100 font-semibold">{formDataArray  [indexes ].genres }</p ></td >  */} 
              <td className="p-4 border-b border-slate-700 bg-slate-800"><p class ="text-sm text-slate-100 font-semibold">{formDataArray  [indexes ].page }</p ></td > 
              <td className ="p-4 border-b border-slate-700 bg-slate-900"> 
                {indexes }<button 
                  className ="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" 
                //   onClick ={()=>onDelete (book.id )} 
                onClick ={()=>handleDeleteItem (indexes )} 
                > 
                  Delete 
                </button > 
                </td > 
              
            </tr > 
          ))} 
        </tbody > 
            </table > 
            
            <button 
        className ="text-white bg-red-800 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-400 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 mt-2" 
        // className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" 
        onClick ={()=>setIsDialogOpen (true )}   

      > 
        Add More 
      </button > 
        </div > 
      ); 
    } 
        
    //{id :12,titles :'The Lord of the Rings',author :'J.R.R. Tolkien', description :'A high epic legend ',sold :150000000},{id :1,titles :"Harry Potter and the Sorcerer's Stone", author :'J.K. Rowling' }, 
//         const [formDataArray ,setFormDataArray ]=useState ([{id :12,titles :'The Lord of the Rings',author :'J.R.R. Tolkien', description :'A high epic legend ',sold :150000000},{id :1,titles :"Harry Potter and the Sorcerer's Stone", author :'J.K. Rowling' },]); 
  
//     const handleSubmit =(event )=>{ 
//       event.preventDefault (); 
  
//       const newFormData ={ 
//         titles :event.target.titles , 
//         description :event.target.description , 
//         author :event.target.author , 
//         sold :event.target.sold , 
        
//         // name :event.target.name.value , 
//         // email :event.target.email.value , 
//         // age :event.target.age.value 
//       }; 
  
//       // Using concat 
//       setFormDataArray(formDataArray.concat (newFormData )); 
  
//       // Using spread operator 
//       // setFormDataArray ([...formDataArray ,newFormData ]); 
  
//       // Reset the form (optional ) 
//       event.target.reset (); 
//     }; 
//     const handleDeleteItem =(index )=>{const updatedArray = formDataArray.filter((item ,i )=>i!==index ); 
//         setFormDataArray(updatedArray );}; 
//     return ( 
//       <form onSubmit={handleSubmit }> 
//         <input type="text" name ="titles" placeholder="Name"/> 
//         <input type ="text" name ="description" placeholder ="Email"/> 
        
        
        
//         <input type ="number"   
//    name ="age" placeholder ="Age"/> 
//         <button type ="submit">Submit </button >    
  
  
//         <ul > 
//           {formDataArray.map((formData ,index )=>( 
//             <><li key ={index }> 
//               {index } Name: {formData.titles }, Email: {formData.description }, 
//               Author :{formData.author }, 
//               {/* Age :{formData.age }  */} 
//               <button onClick ={()=>handleDeleteItem (index )}>Delete </button > 
//             </li ></ > 
//             // <button onClick ={()=>handleDelete (index )}>Delete </button > 
//           ))} 
//         </ul > 
//       </form > 
//     ); 
//   }   
export default AppendingForm ; 