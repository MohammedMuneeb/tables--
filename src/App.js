import {useState ,useEffect }from "react" 
import "./App.css" 





import axios from "axios"; 
import DynamicTable from "./DynamicTable"; 


export default DynamicTable ; 
function BookTable (){




  const [books ,setBooks ]=useState ([ 
    {id :19,titles :'The Lord of the Rings',author :'J.R.R. Tolkien', description :'A high epic legend ',sold :150000000},{id :12,titles :"Harry Potter and the Sorcerer's Stone", author :'J.K. Rowling' }, 
    {id :99,titles :'Pride and Prejudice',author :'Jane Austen'},{id :117,titles :"Martian ",author :"Andy Weir "} 
  ]); 
  useEffect (()=>{ 
    const fetchBooks =async ()=>{ 
      const response =await axios.get('http://your-backend-url/books');
      setBooks (response.data ); 
    }; 

    fetchBooks (); 
  },[]);   
  
    const [showModal ,setShowModal ]=useState (false );const [currentBook ,setCurrentBook ]=useState (null ); 
     


    const handleAddBook =(newBooklist )=>{ 
    setBooks ([...books, newBook ]);
    setShowModal (false ); 
    console.log (newBook.title ) 
    console.log (newBook.author ) 
    console.log (newBook.description ) 
    console.log (newBook.sold ) 
    }; 

  const handleEditBook =(updatedBook )=>{ 
    setBooks (books.map((book) => (book.id === updatedBook.id ? updatedBook : book)));
    setShowModal (false ); 
  }; 

  const handleDeleteBook =(id )=>{console.log ("id is ",id  );// setBooks (books.filter ((book )=>book._id ===id )); 
    
    try {axios.delete (`http://your-backend-url/books/${id}`);
      setBooks(books.filter((book) => book._id !== id)); // Filter locally for better UX
    } catch (error) {
      console.error("Error deleting book:", error);
      // Handle deletion errors (display error message, retry, etc.)
    } 
  }; 

    // setShowModal (false ); 
  
  const handleChange =(e )=>{setNewBook ({...newBook ,[e.target.name ]:e.target.value });}; 
  const Dialog =()=>{ 
    <div className ="modal"> 
          <h2 >Add Book </h2 > 
          <form onSubmit={handleAddBook}>
            <input type="text" name="title" placeholder="Title" value={newBook.title} onChange={handleChange} />
            <input type="text" name="author" placeholder="Author" value={newBook.author} onChange={handleChange}   
 /> 
            <textarea name="description" placeholder="Description" value={newBook.description} onChange={handleChange} />
            <input type="number" name="sold" placeholder="Sold" value={newBook.sold} onChange={handleChange} />
            <button type="submit">Add Book </button > 
            <button onClick ={()=>setShowModal (false )}>Cancel </button > 
          </form > 
        </div > 
  } 
  const [newBook ,setNewBook ]=useState ({ 
    title :'', 
    author :'', 
    description :'', 
    sold :0, 
  });
  const handleDelete =async (id )=>{ 
    console.log ("id is ",id ) 
    await axios.delete (`http://your-backend-url/books/${id }`); 
    setBooks (books.filter (book =>book._id !==id )); 
  };  
  return ( 
    < > 
    <div class ="relative flex flex-col w-full h-full overflow-scroll text-slate-300 bg-slate-800 shadow-md rounded-lg bg-clip-border"> 
    <table class ="w-full text-left table-auto min-w-max"><thead ><tr  >  
            <th class ="p-4 border-b border-slate-600 bg-slate-700">
                <p class ="text-sm font-normal leading-none text-slate-300"> 
                    Book Title 
                </p > 
            </th > 
            <th class ="p-4 border-b border-slate-600 bg-slate-700">
                <p class="text-sm font-normal leading-none text-slate-300">
                    Author 
                </p > 
            </th > 
            <th class="p-4 border-b border-slate-600 bg-slate-700">
                <p class="text-sm font-normal leading-none text-slate-300">
                   Description 
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
        {books.map ((book ,indexes )=><tr key ={indexes }class="hover:bg-slate-700"> 
            <td class ="p-4 border-b border-slate-700 bg-slate-900"> 
                <p class="text-sm text-slate-100 font-semibold">
                    {book.titles } 
                </p > 
            </td > 
            <td class="p-4 border-b border-slate-700 bg-slate-800"> 
                <p class ="text-sm text-slate-300"> 
                    {book.author } 
                </p > 
            </td > 
            <td class ="p-4 border-b border-slate-700 bg-slate-900"> 
                <p class ="text-sm text-slate-300"> 
                    {book.description } 
                </p > 
            </td > 
            <td class ="p-4 border-b border-slate-700 bg-slate-800">{indexes } 
                <button className ="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" 
                  // onClick ={()=>handleDelete (book._id )} 
                  onClick ={()=>handleDeleteBook (book._id )} >Delete </button > 
            </td > 
        </tr >)} 
        
    </tbody > 
  </table > 
</div > 


{/*Second table */} 
    <div class ="relative flex flex-col w-full h-full overflow-scroll bg-white shadow-md rounded-lg bg-clip-border"> 
    <table class ="w-full text-left table-auto min-w-max"> 
      <thead > 
          <tr > 
          <th 
              class ="p-4 transition-colors cursor-pointer border-b border-slate-300 bg-slate-50 hover:bg-slate-100">
                  <p 
                  class ="flex items-center justify-between gap-2 text-sm font-normal leading-none text-slate-800">
                  Number 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                      stroke="currentColor" aria-hidden="true" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round"
                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                  </svg > 
                  </p > 
              </th > 
              <th 
              class ="p-4 transition-colors cursor-pointer border-b border-slate-300 bg-slate-50 hover:bg-slate-100">
                  <p 
                  class ="flex items-center justify-between gap-2 text-sm font-normal leading-none text-slate-800">
                  Title {/* Name */} 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                      stroke="currentColor" aria-hidden="true" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round"
                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                  </svg > 
                  </p > 
              </th > 
              
              <th 
              class ="p-4 transition-colors cursor-pointer border-b border-slate-300 bg-slate-50 hover:bg-slate-100">
                  <p 
                  class="flex items-center justify-between gap-2 text-sm font-normal leading-none text-slate-800">
                  Author {/* Role Mentioned of character  */} 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                      stroke ="currentColor" aria-hidden="true" class="w-4 h-4">
                      <path stroke-linecap ="round" stroke-linejoin="round"
                      d ="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                  </svg > 
                  </p > 
              </th > 
              <th 
              class="p-4 transition-colors cursor-pointer border-b border-slate-300 bg-slate-50 hover:bg-slate-100">
                  <p
                  class="flex items-center justify-between gap-2 text-sm font-normal leading-none text-slate-800">
                  Description {/* Emails  */} 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                      stroke="currentColor" aria-hidden="true" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round"
                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                  </svg>
                  </p>
              </th>
              <th
              class="p-4 transition-colors cursor-pointer border-b border-slate-300 bg-slate-50 hover:bg-slate-100">
                  <p
                  class ="flex items-center justify-between gap-2 text-sm font-normal leading-none text-slate-800">
                  Number of copies sold or brought {/* Location  */} 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                      stroke="currentColor" aria-hidden="true" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin ="round" 
                      d ="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                  </svg > 
                  </p > 
              </th > 
              <th 
              class ="p-4 transition-colors cursor-pointer border-b border-slate-300 bg-slate-50 hover:bg-slate-100">
                  <p 
                  class ="flex items-center justify-between gap-2 text-sm font-normal leading-none text-slate-800">
                  {/* Number of copies sold or brought Location   */} 
                  Actions 
                  <svg    xmlns ="http://www.w3.org/2000/svg" fill ="none" viewBox ="0 0 24 24" stroke-width="2" 
                      stroke ="currentColor" aria-hidden="true" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round"
                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                  </svg > 
                  </p > 
              </th > 
          </tr > 
      </thead > 
      <tbody > 
          {books.map ((book ,key )=>(<tr class ="hover:bg-slate-50"> 
            <td class="p-4 border-b border-slate-200">
            <p class ="block text-sm text-slate-800">
              {key +1} 
            </p > 
            </td > 
              <td class="p-4 border-b border-slate-200">
                  <p class ="block text-sm text-slate-800">
                      {book.titles } 
                  </p > 
              </td > 
              <td class="p-4 border-b border-slate-200">
                  <p className ="block text-sm text-slate-800"> 
                     {book.author } 
                  </p > 
              </td > 
              <td class="p-4 border-b border-slate-200">
                  <p class ="block text-sm text-slate-800"> 
                      {book.description } 
                  </p > 
              </td > 
              <td class ="p-4 border-b border-slate-200">
                  <p class ="block text-sm text-slate-800">
                      {book.sold } 
                  </p > 
              </td > 
              <td class ="p-4 border-b border-slate-200"><p >gtieo[j {book._id }</p > 
                  {/* <p class ="block text-sm text-slate-800">  */} 
                      {/* {book.sold }  */}
                  {/* </p >  */}
                  {/* </td >  */}
                  <button 
                  className ="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  // onClick ={()=>handleDelete (book._id )}
                  onClick ={()=>handleDeleteBook (book._id )} 
                > 
                  Delete 
                </button > 
              </td > 
               
          </tr >))} 
          
      </tbody > 
    </table > 
    <button 
  className ="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  onClick ={() => setShowModal (true )} 
> 
  Adding Book 
</button > 
{showModal &&( 
  <div className="fixed inset-0 z-10 overflow-y-auto bg-gray-900 bg-opacity-75">
    <div className="flex items-center min-h-screen px-4 py-6">
      <div className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">   

        <div className="sm:flex sm:items-start">
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 className="text-lg leading-6 font-medium text-gray-900">   

              Click to Add a More NEW Book 
            </h3 > 
                <div className ="modal"> 
          <h2 >Add Book </h2 > 
          <form onSubmit ={handleAddBook }> 
            <input type="text" name="title" placeholder="Title" value={newBook.title} onChange={handleChange} />
            <input type="text" name="author" placeholder="Author" value={newBook.author} onChange={handleChange}   
           /> 
            <textarea name="description" placeholder="Description" value={newBook.description} onChange={handleChange} />
            <input type="number" name="sold" placeholder="Sold" value={newBook.sold} onChange={handleChange} />
            {/* <button type="submit">Add Book </button >  */}
            {/* <button  */}
            {/* onClick ={() => setShowModal (false )} */}
            {/* >Cancel </button >  */}
          </form > 
        </div > 
            <button 
              type ="submit" 
              className="mt-3 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3   
                        sm:w-auto sm:text-sm"
            onClick ={handleAddBook }> 
              Add a new Book 
            </button > 
          </div > 
        </div > 
      </div > 
    </div > 
  </div > 
)} 

 
  </div >   
  </ > 
    // <div > 
    //   <table > 
    //   <thead > 
    //     <tr > 
    //       <th >Title </th > 
    //       <th >Author </th > 
    //       <th >Description </th > 
    //       <th >Sold </th > 
    //     </tr > 
    //   </thead > 
    //   <tbody > 
    //     {books.map ((book )=>( 
    //       <tr key ={book.title }> 
    //         <td >{book.title }</td > 
    //         <td>{book.author}</td>
    //         <td>{book.description}</td>
    //         <td>{book.sold}</td>
    //       </tr>
    //     ))} 
    //   </tbody > 
    //   </table > 

    //   <button onClick ={()=>setShowModal (true )}>Add Book </button > 

    //   {/* AddBookModal, EditBookModal, and DeleteBookModal components here */}

    //   {/* Modal overlay and content */}
    //   {showModal && (
    //     <div className="modal-overlay">
    //       <div className="modal-content">
    //         {currentBook ?(""  
    //           // <EditBookModal book={currentBook} onClose={() => setShowModal(false)} onEdit={handleEditBook} />
    //         ):( 
    //           <Dialog onClose={() => setShowModal(false)} onAdd={handleAddBook} />
    //         )} 
    //       </div > 
    //     </div > 
    //   )} 
    // </div > 
  ); 
} 