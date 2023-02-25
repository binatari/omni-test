import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import { Button, Box } from "@mui/material";
import {  Typography } from "@mui/material";
import {
  PDFDownloadLink,
} from "@react-pdf/renderer";
import { api } from "../../src/queries";
import Loader from "../Loader/Loader";
import MyDocument from "../Documents/MyDocument";

// const pdf = dynamic(() => import("@react-pdf/renderer"), {
//   ssr: false,
// });

export default function StudentTable({ rows, tableLoading, isFiltered }) {
  const ref = React.useRef(null);
  const [loading, setLoading] = React.useState(null);
  const [result, setResult] = React.useState({});
  const [logo, setLogo] = React.useState('');
  const [profileImage, setProfileImage] = React.useState('');

//programmatically click download button after result is fetched
  const clickElement = async (id) => {
    setLoading(id);
    api
      .post(`/viewResult/${id}`)
      .then((res) => {
        setResult(res.data.data);
        setLogo(res.data.logo);
        setProfileImage(res.data.profile_picture)
        setTimeout(() => {
          ref.current.children[0].dispatchEvent(
            new MouseEvent("click", {
              view: window,
              bubbles: true,
              cancelable: true,
              buttons: 1,
            })
          );
        }, [1000]);
      })
      .catch((err) => console.log(err))
      .finally((response) => setLoading(null));
  };

  const [isClient, setIsClient] = React.useState(false);

  //avoid server side rendering on @react-pdf
  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <TableContainer
      className="table"
      sx={{
        bgcolor: "white",
        maxHeight: "400px",
        overflowY: "scroll",
        paddingRight: "1rem",
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ bgcolor: "#F9F9FA" }}>
          <TableRow sx={{ fontWeight: 700 }}>
            <TableCell sx={{ fontWeight: 700 }}>S/N</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Surname</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>First Name</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Age</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Gender</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Level</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>State</TableCell>
            <TableCell sx={{ fontWeight: 700 }} align="center">
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!tableLoading && rows.length
            ? rows.map(
                ({ id, surname, state, level, gender, firstname, age }, i) => (
                  <TableRow
                    key={i}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      color: "#343434",
                      fontSize: "14px",
                      background: "#FFFFFF",
                    }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ color: "#343434" }}
                    >
                      {i < 9 ? "0" + (i + 1) : i + 1}
                    </TableCell>
                    <TableCell sx={{ color: "#343434", fontWeight:400 }}>{surname}</TableCell>
                    <TableCell sx={{ color: "#343434" }}>{firstname}</TableCell>
                    <TableCell sx={{ color: "#343434" }}>{age}</TableCell>
                    <TableCell sx={{ color: "#343434" }}>{gender}</TableCell>
                    <TableCell sx={{ color: "#343434" }}>{level}</TableCell>
                    <TableCell sx={{ color: "#343434" }}>{state}</TableCell>
                    <TableCell align="center">
                      <Button
                        disableElevation
                        sx={{ textTransform: "none" }}
                        onClick={() => clickElement(id)}
                        color="primary"
                        variant="contained"
                        disabled={loading == id}
                      >
                        {loading == id ? <Loader isGreen /> : "Download Result"}
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              )
            : null}
        </TableBody>
        <TableFooter>
          {tableLoading ? (
            <TableCell colSpan={8}>
              <div
                style={{
                  margin: "0 auto",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Loader isGreen />
              </div>
            </TableCell>
          ) : !rows.length && isFiltered ? (
            <TableCell colSpan={8}>
              <div
                style={{
                  margin: "0 auto",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                   <Typography variant="p" textAlign={'center'} color={"grey.light"}>
                  Record could not be found, please adjust filters and try again
                </Typography>
              </div>
            </TableCell>
          ) : !rows.length && !isFiltered (
            <TableCell colSpan={8}>
              <div
                style={{
                  margin: "0 auto",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                 <Typography variant="p" textAlign={'center'} color={"grey.light"}>
                  Could not fetch records, please check your internet connection and try again
                </Typography>
              </div>
            </TableCell>
          )}
        </TableFooter>
      </Table>

      {isClient ? (
        <div ref={ref} style={{ display: "none" }}>
          <PDFDownloadLink
            className="trash"
            document={<MyDocument {...result} profileImage={profileImage} logo={logo} />}
            fileName="somename.pdf"
          >
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Download now!"
            }
          </PDFDownloadLink>
        </div>
      ) : null}
    </TableContainer>
  );
}
