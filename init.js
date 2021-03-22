import app from "./app";

/* init.js 에는 app.js 에서 import 한 application이 있음 */

const PORT = 4000;


const handleListening = () => console.log(`✅Listening on http://localhost${PORT}`);

app.listen(PORT, handleListening);