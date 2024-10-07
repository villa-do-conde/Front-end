import React from "react";
import SideMenu from "../../components/SideMenu/sideMenuView";
import "./parentsView.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import Modal from "@mui/material/Modal";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function ParentsPage() {
  return (
    <div className="parents-page">
      <SideMenu />
      <div className="main-content">
        <div className="header">
          <h1>Núcleo Fornari</h1>
          <Badge badgeContent={4} color="primary">
            <MailIcon color="action" />
          </Badge>
        </div>

        <div className="notice-board">
          <h2>Mural de Avisos</h2>
          <div className="notice">
            <p>
              <strong>Por Viviane Pereira - Terça-Feira, 3 de Setembro</strong>
            </p>
            <h3>Encontro de Pais - 20/09</h3>
            <p>Sala G1A às 16:00</p>
          </div>
          <div className="notice">
            <p>
              <strong>Por Viviane Pereira - Terça-Feira, 1 de Setembro</strong>
            </p>
            <h3>Feriado 7 Setembro - Atividades</h3>
            <p>Iremos realizar uma exposição de atividades dos alunos.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ParentsPageReuniao() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [motivo, setMotivo] = React.useState("");

  const handleChangeSelect = (event) => {
    setMotivo(event.target.value);
  };

  const [value, setTurno] = React.useState("");
  const handleChangeRadio = (event) => {
    setTurno(event.target.value);
  };

  function createData(tipo, data, sitacao, resposta) {
    return { tipo, data, sitacao, resposta };
  }

  const rows = [
    createData("Documentação", "24/05/2024", "Respondida", "Reunião Marcada"),
    createData(
      "Administrativo",
      "29/09/2024",
      "Não Respondida",
      "Sem Resposta"
    ),
  ];
  return (
    <div className="parents-page">
      <SideMenu />
      <div className="main-content">
        <div className="header">
          <h1>Núcleo Fornari</h1>
          <Badge badgeContent={4} color="primary">
            <MailIcon color="action" />
          </Badge>
        </div>

        

        <div className="tabela">
          <h1><b>Reuniões Solicitadas</b></h1><br />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell>Tipo</TableCell>
                  <TableCell align="right">Data</TableCell>
                  <TableCell align="right">Situação</TableCell>
                  <TableCell align="right">Resposta</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow hover role="checkbox"
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.tipo}
                    </TableCell>
                    <TableCell align="right">{row.data}</TableCell>
                    <TableCell align="right">{row.sitacao}</TableCell>
                    <TableCell align="right">{row.resposta}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>


        <div className="solicitar">
          <Button onClick={handleOpen}>Solicitar Reunião</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box sx={{ ...style, width: 700 }}>
              <div className="reuniao">
                <div className="form">
                  <div className="input">
                    <label>Motivo da Solicitação</label>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                      <InputLabel id="demo-select-small-label">
                        Motivo
                      </InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={motivo}
                        label="Motivo"
                        onChange={handleChangeSelect}
                      >
                        <MenuItem value="">
                          <em>Selecione</em>
                        </MenuItem>
                        <MenuItem value={"administrativo"}>
                          Administrativo
                        </MenuItem>
                        <MenuItem value={"documentacao"}>Documentação</MenuItem>
                        <MenuItem value={"denuncia"}>Denúncia</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="input">
                    <label>Turno</label>

                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={value}
                        onChange={handleChangeRadio}
                      >
                        <FormControlLabel
                          value="manha"
                          control={<Radio />}
                          label="Manhã"
                        />
                        <FormControlLabel
                          value="tarde"
                          control={<Radio />}
                          label="Tarde"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>

                  <div className="input">
                    <Box
                      component="form"
                      sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
                      noValidate
                      autoComplete="off"
                    >
                      <div>
                        <TextField
                          id="outlined-multiline-static"
                          label="Descreva"
                          multiline
                          rows={4}
                        />
                      </div>
                    </Box>
                  </div>

                  <div className="input">
                    <Stack direction="row" spacing={2}>
                      <Button variant="contained" endIcon={<SendIcon />}>
                        Solicitar
                      </Button>
                    </Stack>
                  </div>
                </div>
              </div>
            </Box>
          </Modal>
        </div>

      </div>
    </div>
  );
}

function ParentsPageAgenda() {
  return (
    <div className="parents-page">
      <SideMenu />
      <div className="main-content">
        <div className="header">
          <h1>Núcleo Fornari</h1>
          <Badge badgeContent={4} color="primary">
            <MailIcon color="action" />
          </Badge>
        </div>

        <div className="notice-board">
          <div className="topo">
            <h1>Agenda de Enzo</h1>
            <select name="mes" id="">
              <option value="janeiro">Janeiro</option>
              <option value="fevereiro">Fevereiro</option>
              <option value="marco">Março</option>
              <option value="abril">Abril</option>
              <option value="maio">Maio</option>
              <option value="junho">Junho</option>
              <option value="julho">Julho</option>
              <option value="agosto">Agosto</option>
              <option value="setembro">Setembro</option>
              <option value="outubro">Outubro</option>
              <option value="novembro">Novembro</option>
              <option value="dezembro">Dezembro</option>
            </select>
          </div>

          <div className="notice">
            <p>
              <strong>Por Viviane Pereira - Terça-Feira, 3 de Setembro</strong>
            </p>
            <h3>Estava tossindo bastante.</h3>
            <p>Sala G1A às 16:00</p>
          </div>
          <div className="notice">
            <p>
              <strong>Por Viviane Pereira - Terça-Feira, 1 de Setembro</strong>
            </p>
            <h3>Hoje o Enzo estava muito sonolento.</h3>
            <p>Sala G1A às 15:27</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParentsPageReuniao;
