import React from 'react'
import { Box, Link } from "@mui/material";

const Header = () => {
    return (
      <div className=''>
        <h1>Header </h1>
        <Box>
          <Link href="#" underline="always">
            {"www"}
          </Link>
          <Link href="#" underline="always">
            {"www"}
          </Link>
          <Link href="#" underline="always">
            {"www"}
          </Link>
          <Link href="#" underline="always">
            {"www"}
          </Link>
          <Link href="#" underline="always">
            {"www"}
          </Link>
        </Box>
      </div>
      // <div className="h-24 text-2xl bg-blue-500">This is a styled div element.</div>
    );
}

export default Header
