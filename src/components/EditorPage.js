import React,{useState} from 'react'
import Client from './Client'
import Editor from './Editor'

const EditorPage = () => {
    const [clients,setClient]=useState([
        { socketId:1,username:"Anayaaaa" },
        { socketId:2,username:"Prishaaaa"},
        { socketId:3,username:"Niharika" },
        { socketId:4,username:"Vaani"}
    ])
    return (
        <div>
            <div className='container-fluid vh-100 '>
                <div className='row h-100'>
                    <div 
                        className='col-md-3 bg-dark d-flex text-light flex-column h-100' 
                        style={{
                                boxShadow:"2px 0px 4px rgba(0,0,0,0.1"
                            }}
                        >
                        <img 
                            src="/images/w.png" 
                            alt="" 
                            className='img-fluid mx-auto'
                            style={{
                                    maxWidth:"200px",
                                    marginTop:'10px', 
                                }}
                        />
                        <hr style={{marginTop:"1rem"}}/>
                    {/* client list container */}
                    <div className='d-flex flex-column overflow-auto'>
                        {clients.map((client)=>(
                            <Client key={client.socketId} username={client.username}/>
                        ))}
                    </div>
                    {/* buttons */}
                    <div className='mt-auto'>
                    <hr/>
                        <button className='btn btn-success w-50'>Copy Room ID</button>
                        <br/>
                        <button className='btn btn-danger mt-2 mb-2 px-3 btn-block w-50'>Leave Room</button>
                    </div>
                    </div>
                </div>
                <div className='col-md-10 text-light d-flex flex-column h-100'>
                    <Editor/>
                </div>
            </div>
        </div>
    )
}

export default EditorPage;
