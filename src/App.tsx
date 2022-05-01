import { AppBar, Toolbar, Typography, Link } from "@mui/material"

import { AppRoutes } from "./routes/AppRouters"

function App() {
  return <>
    <AppBar position="fixed">
      <Toolbar>
        <Link href="/" underline="none" color={"white"}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Blog
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
    <div className="mt-5 p-3">
      <AppRoutes />
    </div>
  </>
}

export default App
