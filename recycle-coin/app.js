const express = require("express");
const cors = require("cors");
require("./database/dbConnection");
require("./grpc/main");
const hataMiddleware = require("./middleware/hataMiddleware");

//ROUTERS
const userRouter = require("./routers/userRouter");
const kategoriRouter = require("./routers/kategoriRouter");
const camRouter = require("./routers/camRouter");
const plastikRouter = require("./routers/plastikRouter");
const kagitRouter = require("./routers/kagitRouter");
const pilRouter = require("./routers/pilRouter");
const aluminyumRouter = require("./routers/aluminyumRouter");
const demirRouter = require("./routers/demirRouter");
const ahsapRouter = require("./routers/ahsapRouter");
const betonRouter = require("./routers/betonRouter");
const tekstilRouter = require("./routers/tekstilRouter");
const elektronikRouter = require("./routers/elektronikRouter");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/users", userRouter);
app.use("/api/kategoriler", kategoriRouter);
app.use("/api/camlar", camRouter);
app.use("/api/plastikler", plastikRouter);
app.use("/api/kagitlar", kagitRouter);
app.use("/api/piller", pilRouter);
app.use("/api/aluminyumlar", aluminyumRouter);
app.use("/api/demirler", demirRouter);
app.use("/api/ahsaplar", ahsapRouter);
app.use("/api/betonlar", betonRouter);
app.use("/api/tekstiller", tekstilRouter);
app.use("/api/elektronikler", elektronikRouter);

app.use(hataMiddleware);

app.listen(3000, () => {
  console.log("Server 1 3000 portundan ayaklandirildi");
});
