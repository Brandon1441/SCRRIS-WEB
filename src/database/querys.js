export const querys = {
  getAllMiembros: "SELECT matricula,nombre, apellido, edad, sexo, email, activo,direccion, celular, fecha_nacimiento FROM miembros ORDER BY fecha_creacion DESC",
  getProducById: "SELECT * FROM Products Where Id = @Id",
  addNewMiembro:"INSERT INTO MIEMBROS (nombre, apellido, edad, sexo, direccion, celular,matricula,email,activo,fecha_creacion,miembro_activo,fecha_nacimiento) values (@nombre,@apellido,@edad,@sexo,@direccion,@celular,'111111','--','1', getdate(),'Si','11111111');",
    
  deleteProduct: "DELETE FROM [webstore].[dbo].[Products] WHERE Id= @Id",
  getTotalProducts: "SELECT COUNT(*) FROM webstore.dbo.Products",
  updateProductById:
    "UPDATE [webstore].[dbo].[Products] SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @id",
};
