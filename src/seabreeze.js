import { useState } from "react"

export default function Seab() {

    const {title,setTitle} = useState("");
    const {description,setDescription} = useState("");
    const {seabreeze,setSeabreeze} = useState([]);
    const {error,setError} = useState("");
    const {success,setSucc} = useState("");
    const apiurl = "http://localhost:2000/";
    
    const handleSubmit = () => {
        //check inputs
        if(title.trim() !== '' && description.trim() !== '' ){
            fetch(apiurl + "/seabreeze", {
                method: "POST",
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({title,description})

        }).then((res) => {
            if(res.ok){
                //add item list 
                setTitle(event.target.value);
                setDescription(event.target.value);
                setSucc("successfully item added")
            }else{
                //set error 
                setError("unable to create item list...")
            }
        })

            
        }
    }

             
    return (
        <>
            <div className="row badge bg-primary border border-success rounded-pill position-absolute top-50 start-50 translate-middle">
                <h1>Seabreeze Testing View</h1>
            </div>
            <div className="row">
                <h1>Add Your Valuable Details</h1>
                <div className="form-group d-flex gap-2">
                    <input
                        placeholder="Customer Name"
                        className="form-container"
                        onChange={handleSubmit}
                        value={title}
                        type="text"
                    />
                    <input
                        placeholder="Phone Number"
                        className="form-container"
                        onChange={handleSubmit}
                        value={description}
                        type="text"
                    />
                    <button className="btn btn-primary me-md-2" onClick={handleSubmit}>Submit</button>
                </div>
                <div className="color:success">
                    {success && <p>{success}</p>}
                </div>
                {error && <p>{error}</p>}
            </div>
        </>
    );
}

