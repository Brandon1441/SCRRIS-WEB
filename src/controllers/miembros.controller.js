import { getConnection, querys, sql } from "../database";

export const getMiembros = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllMiembros);
    res.json(result.recordset);
    console.log('Se consulta Miembro correctamente')
  } catch (error) {
    res.status(500);
    res.send(error.message);
    
  }
};

export const createNewMiembro = async (req, res) => {
  const {nombre, apellido, edad, sexo, direccion, celular} = req.body;
  

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("nombre", sql.VarChar, nombre)
      .input("apellido", sql.VarChar, apellido)
      .input("edad", sql.Int, edad)
      .input("sexo", sql.VarChar, sexo)
      .input("direccion", sql.VarChar, direccion)
      .input("celular", sql.VarChar, celular)
   
      .query(querys.addNewMiembro);

      console.log('Se inserta Miembro correctamente')

    res.json({ nombre, apellido, edad, sexo, direccion, celular });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getMiembroById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getProducById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteMiembroById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.deleteMiembro);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getTotalMiembros = async (req, res) => {
  const pool = await getConnection();

  const result = await pool.request().query(querys.getTotalMiembros);
  console.log(result);
  res.json(result.recordset[0][""]);
};

export const updateMiembroById = async (req, res) => {
  const { description, name, quantity } = req.body;

  // validating
  if (description == null || name == null || quantity == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("description", sql.Text, description)
      .input("quantity", sql.Int, quantity)
      .input("id", req.params.id)
      .query(querys.updateMiembroById);
    res.json({ name, description, quantity });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
