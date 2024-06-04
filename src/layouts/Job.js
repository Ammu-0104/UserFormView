import React from "react";
import "./job.css";
import bird from "../assets/images/bird_2.jpg";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

function createData(name, calories, fat, carbs, Description) {
  return { name, calories, fat, carbs, Description };
}

const rows = [
  createData(
    "Fan",
    "USHA",
    "1 month",
    " 20-10-12",
    "Minor scratches on the fan blades.Excellent working condition."
  ),
  createData(
    "Sofa",
    "Furtniture ",
    "1 montnh",
    " 20-10-12",
    "Minor scratches on the fan blades.Excellent working condition."
  ),
];

// Vehicle

function vehicleData(model, type, vehicleNo, dealerAgency, description) {
  return { model, type, vehicleNo, dealerAgency, description };
}

const vehiclerows = [
  vehicleData(
    "Toyota Camry",
    "Sedan",
    "ABC123",
    "Toyota Dealership",
    "Reliable sedan with advanced safety features"
  ),
  vehicleData(
    "Ford Explorer",
    "SUV",
    "XYZ789",
    "Ford Dealership",
    "Versatile SUV with spacious interior and modern technology"
  ),
  vehicleData(
    "Chevrolet Corvette",
    "Sports Car",
    "DEF456",
    "Chevrolet Dealership",
    "High-performance sports car known for speed and style"
  ),
];

// Gadget

function gadgetData(gadget, brand, warranty, purchaseDate, description) {
  return { gadget, brand, warranty, purchaseDate, description };
}

const gadgetrows = [
  gadgetData(
    "Smartphone",
    "ABC Brand",
    "1 year",
    "2023-01-15",
    "High-end smartphone with advanced features"
  ),
  gadgetData(
    "Laptop",
    "XYZ Brand",
    "2 years",
    "2022-09-28",
    "Powerful laptop for gaming and productivity"
  ),
  gadgetData(
    "Smartwatch",
    "PQR Brand",
    "1.5 years",
    "2023-05-10",
    "Fitness tracking and notifications"
  ),
  gadgetData(
    "Tablet",
    "LMN Brand",
    "1 year",
    "2022-11-20",
    "Portable tablet for entertainment and work"
  ),
  gadgetData(
    "Camera",
    "DEF Brand",
    "3 years",
    "2022-07-05",
    "Professional-grade camera for photography"
  ),
];

//property
function createDatas(
  type,
  availability,
  property,
  location,
  description,
  land
) {
  return { type, availability, property, location, description, land };
}

const propertys = [
  createDatas(
    "House - 2BHK",
    "RENT",
    "Residential",
    "2500Sqft",
    "Chennai",
    "Charming 2-bed, 1-bath in Cityville. Cozy living space, updated kitchen. Close to amenities. Ideal for couples or singles. Check it out!"
  ),
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "0px",
  boxShadow: 24,
  borderRadius: "12px",
  p: 4,
};

function Job() {
  const [Name, setName] = React.useState(false);
  const handleNameOpen = () => setName(true);
  const handleNameClose = () => setName(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [personal, setpersonal] = React.useState(false);
  const handlePersonalOpen = () => setpersonal(true);
  const handlePersonalClose = () => setpersonal(false);

  const [Education, setEducation] = React.useState(false);
  const handleEducationOpen = () => setEducation(true);
  const handleEducationClose = () => setEducation(false);

  const [Job, setJob] = React.useState(false);
  const handleJobOpen = () => setJob(true);
  const handleJobClose = () => setJob(false);

  const [Home, setHome] = React.useState(false);
  const handleHomeOpen = () => setHome(true);
  const handleHomeClose = () => setHome(false);

  const [Vehicle, setVehicle] = React.useState(false);
  const handleVehicleOpen = () => setVehicle(true);
  const handleVehicleClose = () => setVehicle(false);

  const [Gadget, setGadget] = React.useState(false);
  const handleGadgetOpen = () => setGadget(true);
  const handleGadgetClose = () => setGadget(false);

  const [Property, setProperty] = React.useState(false);
  const handlePropertyOpen = () => setProperty(true);
  const handlePropertyClose = () => setProperty(false);

  return (
    <div className="job">
      <div className="card mt-4">
        <div className="profile">
          <div className="pro-img text-center">
            <img
              src={bird}
              alt=""
              className="img-fluid"
              style={{
                width: "110px",
                borderRadius: "50%",
                boxShadow: "0px 4px 50px rgba(0, 0, 0, 0.09)",
              }}
            />
          </div>
          <h5 className=" text-center mt-2">
            Tovino Thomas
            <sup>
              <Button onClick={handleNameOpen}>
                <i class="fi fi-rr-file-edit"></i>
              </Button>
              <Modal
                open={Name}
                onClose={handleNameClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <p>NAme</p>
                  <button onClick={handleNameClose}>Close</button>
                </Box>
              </Modal>
            </sup>
          </h5>
        </div>
      </div>
      <div className="card mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <h5>Contact Information</h5>
          <p>
            <Button onClick={handleOpen}>
              <i class="fi fi-rr-file-edit ms-2"></i>
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}></Box>
            </Modal>
          </p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <p>
              Email : <span> Tovino@gmail.com </span>
            </p>
          </div>
          <div className="col-md-4">
            <p>
              Mobile No : <span>9988776655</span>
            </p>
          </div>
          <div className="col-md-4">
            <p>
              Address :{" "}
              <span>
                {" "}
                above Super Star Briyani, Ram Nagar South, Pallikaranai,
                Chennai, Tamil Nadu 600100
              </span>
            </p>
          </div>
        </div>
        <h6 className="mt-3">ID Proof</h6>
        <div className="row">
          <div className="col-md-3">
            <p className="mb-0">
              Aadhar Card : <span> 233411231342</span>
            </p>
          </div>
          <div className="col-md-2">
            <p className="mb-0">
              Issue : <span> 23-01-342</span>
            </p>
          </div>
          <div className="col-md-2">
            <p className="mb-0">
              Expire : <span> 23-01-342</span>
            </p>
          </div>
          <div className="col-md-2">
            <p className="mb-0">
              Country : <span> India</span>
            </p>
          </div>
          <div className="col-md-3">
            <p className="mb-0">
              Issuing Authority : <span> Samsung</span>
            </p>
          </div>
        </div>
      </div>
      <div className="card mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <h5>Personal Details</h5>
          <p>
            <Button onClick={handlePersonalOpen}>
              <i class="fi fi-rr-file-edit ms-2"></i>
            </Button>
            <Modal
              open={personal}
              onClose={handlePersonalClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}></Box>
            </Modal>
          </p>
        </div>
        <div className="row">
          <div className="col-md-2">
            <p>
              DOB : <span> 21-01-22</span>
            </p>
          </div>
          <div className="col-md-2">
            <p>
              Age : <span> 21</span>
            </p>
          </div>
          <div className="col-md-2">
            <p>
              Gender : <span> Male</span>
            </p>
          </div>
          <div className="col-md-3">
            <p>
              Material Status : <span> Married</span>
            </p>
          </div>
          <div className="col-md-3">
            <p>
              Occupation : <span> VideoGraph</span>
            </p>
          </div>
        </div>
        <h6 className="mt-3">Disability Details</h6>
        <div className="row">
          <div className="col-md-2">
            <p>
              Disability : <span>yes</span>
            </p>
          </div>
          <div className="col-md-3">
            <p>
              Description : <span>ColorBlindness</span>
            </p>
          </div>
        </div>
        <h6 className="mt-3">Relationship Details</h6>
        <div className="row">
          <div className="col-md-3">
            <p className="mb-0">
              Name : <span> SaraTara</span>
            </p>
          </div>
          <div className="col-md-3">
            <p className="mb-0">
              Dob : <span> 21-01-68</span>
            </p>
          </div>
          <div className="col-md-3">
            <p className="mb-0">
              Relation : <span> Mother</span>
            </p>
          </div>
          <div className="col-md-3">
            <p className="mb-0">
              Age : <span> 55</span>
            </p>
          </div>
        </div>
      </div>
      <div className="card mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <h5>Education</h5>
          <p>
            <Button onClick={handleEducationOpen}>
              <i class="fi fi-rr-file-edit ms-2"></i>
            </Button>
            <Modal
              open={Education}
              onClose={handleEducationClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Education
                </Typography>
              </Box>
            </Modal>
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <p>
              School -
              <span>
                Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
                amet.
              </span>
            </p>
            <p>
              B.com Accounts - <span> 98%</span>
            </p>
            <p>
              <span>2018 - 2021</span>
            </p>
          </div>
        </div>
      </div>
      <div className="card mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <h5>Job Details</h5>
          <p>
            <Button onClick={handleJobOpen}>
              <i class="fi fi-rr-file-edit ms-2"></i>
            </Button>
            <Modal
              open={Job}
              onClose={handleJobClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Job
                </Typography>
              </Box>
            </Modal>
          </p>
        </div>
        <div className="d-flex justify-content-between">
          <p>
            Are you a working Professional or Fresher : <span>Experience</span>
          </p>
          <p>
            Resume : <span> Shetal resume.pdf</span>
          </p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <p>
              Designation : <span> WebDesigner</span>
            </p>
          </div>
          <div className="col-md-4">
            <p>
              Years : <span>1 years</span>
            </p>
          </div>
        </div>
        <p>
          Skills : <span> Html ,CSS ,Javascript , React , Figma .</span>
        </p>
        <p>
          Previous Company : <span> Sanjai rama IT park .</span>
        </p>
      </div>
      <div className="card mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <h5>Home Appliance Details</h5>
          <p>
            <Button onClick={handleHomeOpen}>
              <i class="fi fi-rr-file-edit ms-2"></i>
            </Button>
            <Modal
              open={Home}
              onClose={handleHomeClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Home
                </Typography>
              </Box>
            </Modal>
          </p>
        </div>
        <TableContainer component={Paper} sx={{ border: "none", boxShadow: 0 }}>
          <Table sx={{ border: "none" }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f4f4f4" }}>
                <TableCell
                  sx={{
                    border: "none",
                    borderRadius: "8px 0px 0px 8px",
                    width: "15%",
                  }}
                >
                  Appliance Type
                </TableCell>
                <TableCell sx={{ border: "none", width: "15%" }} align="left">
                  Brand
                </TableCell>
                <TableCell sx={{ border: "none", width: "15%" }} align="left">
                  Warranty
                </TableCell>
                <TableCell sx={{ border: "none", width: "15%" }} align="left">
                  Purchase Date
                </TableCell>
                <TableCell
                  sx={{
                    border: "none",
                    borderRadius: "0px 8px 8px 0px",
                    width: "50%",
                  }}
                  align="left"
                >
                  Description
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={row.name}
                  sx={{
                    "&:last-child td, &:last-child th": { border: "0" },
                    borderRadius: "10px",
                    backgroundColor: index % 2 === 0 ? "#ffffff" : "#f4f4f4",
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ border: "0", borderRadius: "8px 0px 0px 8px" }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell sx={{ border: "0" }} align="left">
                    {row.calories}
                  </TableCell>
                  <TableCell sx={{ border: "0" }} align="left">
                    {row.fat}
                  </TableCell>
                  <TableCell sx={{ border: "0" }} align="left">
                    {row.carbs}
                  </TableCell>
                  <TableCell
                    sx={{ border: "0", borderRadius: "0px 8px 8px 0px" }}
                    align="left"
                  >
                    {row.Description}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="card mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <h5>Vehicle Details</h5>
          <p>
            <Button onClick={handleVehicleOpen}>
              <i class="fi fi-rr-file-edit ms-2"></i>
            </Button>
            <Modal
              open={Vehicle}
              onClose={handleVehicleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Vehicle
                </Typography>
              </Box>
            </Modal>
          </p>
        </div>
        <TableContainer component={Paper} sx={{ border: "none", boxShadow: 0 }}>
          <Table sx={{ border: "none" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ border: "0" }}>Model</TableCell>
                <TableCell sx={{ border: "0" }}>Type</TableCell>
                <TableCell sx={{ border: "0" }}>Vehicle NO</TableCell>
                <TableCell sx={{ border: "0" }}>Dealer/Agency</TableCell>
                <TableCell sx={{ border: "0" }}>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {vehiclerows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" sx={{ border: "0" }}>
                    {row.model}
                  </TableCell>
                  <TableCell sx={{ border: "0" }}>{row.type}</TableCell>
                  <TableCell sx={{ border: "0" }}>{row.vehicleNo}</TableCell>
                  <TableCell sx={{ border: "0" }}>{row.dealerAgency}</TableCell>
                  <TableCell sx={{ border: "0" }}>{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="card mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <h5>Gadget Details</h5>
          <p>
            <Button onClick={handleGadgetOpen}>
              {" "}
              <i class="fi fi-rr-file-edit ms-2"></i>
            </Button>
            <Modal
              open={Gadget}
              onClose={handleGadgetClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Gadget
                </Typography>
              </Box>
            </Modal>
          </p>
        </div>
        <TableContainer component={Paper} sx={{ border: "none", boxShadow: 0 }}>
          <Table sx={{ border: "none" }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f4f4f4" }}>
                <TableCell
                  sx={{
                    border: "none",
                    borderRadius: "8px 0px 0px 8px",
                    width: "15%",
                  }}
                >
                  Gadget
                </TableCell>
                <TableCell sx={{ border: "none", width: "15%" }} align="left">
                  Brand
                </TableCell>
                <TableCell sx={{ border: "none", width: "15%" }} align="left">
                  Warranty
                </TableCell>
                <TableCell sx={{ border: "none", width: "15%" }} align="left">
                  Purchase Date
                </TableCell>
                <TableCell
                  sx={{
                    border: "none",
                    borderRadius: "0px 8px 8px 0px",
                    width: "50%",
                  }}
                  align="left"
                >
                  Description
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {gadgetrows.map((gadgetRow, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "&:last-child td, &:last-child th": { border: "0" },
                    borderRadius: "10px",
                    backgroundColor: index % 2 === 0 ? "#ffffff" : "#f4f4f4",
                  }}
                >
                  <TableCell
                    component="th"
                    scope="gadgetrows"
                    sx={{ border: "0", borderRadius: "8px 0px 0px 8px" }}
                  >
                    {gadgetRow.gadget}
                  </TableCell>
                  <TableCell sx={{ border: "0" }} align="left">
                    {gadgetRow.brand}
                  </TableCell>
                  <TableCell sx={{ border: "0" }} align="left">
                    {gadgetRow.warranty}
                  </TableCell>
                  <TableCell sx={{ border: "0" }} align="left">
                    {gadgetRow.purchaseDate}
                  </TableCell>
                  <TableCell
                    sx={{ border: "0", borderRadius: "0px 8px 8px 0px" }}
                    align="left"
                  >
                    {gadgetRow.description}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="card mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <h5>Property Details</h5>
          <p>
            <Button onClick={handlePropertyOpen}>
              {" "}
              <i class="fi fi-rr-file-edit ms-2"></i>
            </Button>
            <Modal
              open={Property}
              onClose={handlePropertyClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Property
                </Typography>
              </Box>
            </Modal>
          </p>
        </div>
        <TableContainer component={Paper} sx={{ border: "none", boxShadow: 0 }}>
          <Table sx={{ border: "none" }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f4f4f4" }}>
                <TableCell
                  sx={{
                    border: "none",
                    borderRadius: "8px 0px 0px 8px",
                    width: "15%",
                  }}
                >
                  Type
                </TableCell>
                <TableCell sx={{ border: "none", width: "15%" }} align="left">
                  Availability
                </TableCell>
                <TableCell sx={{ border: "none", width: "15%" }} align="left">
                  House Types
                </TableCell>
                <TableCell sx={{ border: "none", width: "15%" }} align="left">
                  Land Sq.ft
                </TableCell>
                <TableCell sx={{ border: "none", width: "15%" }} align="left">
                  Location
                </TableCell>
                <TableCell
                  sx={{
                    border: "none",
                    borderRadius: "0px 8px 8px 0px",
                    width: "50%",
                  }}
                  align="left"
                >
                  Description
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {propertys.map((row, index) => (
                <TableRow
                  key={row.type}
                  sx={{
                    "&:last-child td, &:last-child th": { border: "0" },
                    borderRadius: "10px",
                    backgroundColor: index % 2 === 0 ? "#ffffff" : "#f4f4f4",
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ border: "0", borderRadius: "8px 0px 0px 8px" }}
                  >
                    {row.type}
                  </TableCell>
                  <TableCell sx={{ border: "0" }} align="left">
                    {row.availability}
                  </TableCell>
                  <TableCell sx={{ border: "0" }} align="left">
                    {row.property}
                  </TableCell>
                  <TableCell sx={{ border: "0" }} align="left">
                    {row.location}
                  </TableCell>
                  <TableCell sx={{ border: "0" }} align="left">
                    {row.description}
                  </TableCell>
                  <TableCell
                    sx={{ border: "0", borderRadius: "0px 8px 8px 0px" }}
                    align="left"
                  >
                    {row.land}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Job;
