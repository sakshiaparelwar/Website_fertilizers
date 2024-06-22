import { useEffect, useState } from "react";
import { Button, Container, Modal, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { deleteSavedData, editSavedData, fetchSavedDataForuser } from "../utils/action.js";
import { toast } from "react-toastify";


export function UserDashboard(){
  
 
  const [fertilizerForUser,setFertilizerForUser] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedArea,setSelectedArea] = useState("");
  const [selectedSaveAs,setSelectedSaveAs] = useState("");
  const [idToManupulate,setIdToManupulate] = useState("");
  const [editId,setEditId] = useState('');
  const navigate = useNavigate();

    const token = localStorage.getItem("token")
    console.log(token);
    const userId = localStorage.getItem("_id");


  const openModalDialog = () => {
        setShowDialog(true);
    }
  const closeModalDialog = () => {
        setShowDialog(false);
    }

    async function populatefarmerState() {
      try{
        const response = await fetchSavedDataForuser(token,userId);
        if(response.status){
            setFertilizerForUser(response.data);
        }
        
      }catch(error){
        console.log("error",error);
      }
    }

    useEffect(()=> {
      populatefarmerState();
    },[]);

    const handleFarmerDelete = async()=> {
      try {
        if(!idToManupulate){
            toast.error("Invalid ID");
        }
        await deleteSavedData(token,idToManupulate);
        console.log("came here")
        populatefarmerState();
        closeModalDialog();
      }catch(error){
        console.log("error",error);
      }
    }

    const handleFramerEdit = async() => {
        try{
            if(!editId){
                toast.error("Invalid ID");
            }
            let data = {
                id:editId,
                saveAs:fertilizerForUser.filter(item=>item._id==editId)[0].saveAs
            }
            let response = await editSavedData(token,data);
            if(response.status){
                setEditId("");
                populatefarmerState();
            }

        }catch(error){
            console.log("error",error);
          }
    }
    const handleSaveAsChange=(e,id)=>{
        let localFertilizer = [...fertilizerForUser]
        localFertilizer.forEach(item=>{
            if(item._id==id){
                item.saveAs=e.target.value
            }
        })
        setFertilizerForUser(localFertilizer)
    }


    return (
        <>
          <Container>
            {/* <Header text="List of all the Searches"></Header> */}
            {fertilizerForUser?.length !== 0 ? <Table className="mt-4">
                <thead>
                    <tr>
                        <th>Save As</th>
                        <th>Soil Type</th>
                        <th>Crop Type</th>
                        <th>Area</th>
                        <th>Nitrogen</th>
                        <th>Phosporus</th>
                        <th>Potassium</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {
                        fertilizerForUser?.map((f) => {
                            return (
                                <tr>
                                    <td>
                                        
                                        <input type="text"  disabled={!(f._id==editId)} placeholder="Enter Save As" value={f.saveAs} onChange={(e)=>handleSaveAsChange(e,f._id)}/>
                                        </td>
                                    <td>{f.soilType}</td>
                                    <td>{f.cropType}</td>
                                    <td>{f.area}</td>
                                    <td>{(f.nitrogen)?.toFixed(2)}</td>
                                    <td>{(f.phosphorus)?.toFixed(2)}</td>
                                    <td>{(f.potassium)?.toFixed(2)}</td>
                                    
                                    <td>
                                        <Button variant="danger" onClick={() => {
                                            openModalDialog();
                                            setSelectedSaveAs(f.saveAs)
                                            setIdToManupulate(f._id)
                                        }}>Delete</Button> &nbsp;&nbsp;&nbsp;
                                        {editId==f._id?
                                        <>
                                        <Button variant="primary" onClick={handleFramerEdit}>update</Button>
                                        </>
                                        :
                                        <>
                                        <Button variant="primary" onClick={()=>{
                                            setEditId(f._id);
                                        }}>Edit</Button>
                                        </>}
                                        
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table> : <p>No History found...!</p>}

            <Modal show={showDialog} onHide={closeModalDialog}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you really want to delete History with area {selectedSaveAs}?</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={()=>{
                        handleFarmerDelete();
                    }}>
                        Yes
                    </Button>
                    <Button variant="danger" onClick={closeModalDialog}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
        </>
        
    );
}