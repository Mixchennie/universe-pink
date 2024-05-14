import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';

import { TypeH3 } from 'react-bootstrap-icons';

function SellingProducts() {
  return (
    <div>
      <div className="selling-products-heading">
        <h3 style={{ fontSize: '60px', color: '#ff6699' }}>Selling Products</h3>
      </div>
      <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
        <CardOverflow>
          <AspectRatio sx={{ minWidth: 200, position: 'relative' }}>
            <FavoriteBorderOutlinedIcon
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                color: '#ff0000',
                fontSize: '20px',
              }}
            />
            <img
              src="./images/Slider1.jpg"
              srcSet="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x"
              loading="lazy"
              alt=""
            />
          </AspectRatio>
        </CardOverflow>
        <CardContent className="d-flex align-items-center justify-content-between bg-yellow">
          <div>
            <Link
              href="#product-card"
              fontWeight="md"
              color="neutral"
              textColor="text.primary"
              overlay
            >
              Super Rockez A400
            </Link>
            <StarIcon aria-label="Star rating" className="text-yellow-500" />
            <StarIcon aria-label="Star rating" className="text-yellow-500" />
            <StarIcon aria-label="Star rating" className="text-yellow-500" />
            <StarIcon aria-label="Star rating" className="text-yellow-500" />
            <StarIcon aria-label="Star rating" className="text-yellow-500" />
          </div>
          <div>
            <Typography
              level="title-lg"
              sx={{ mt: 1, fontWeight: 'xl' }}
              endDecorator={
                <Chip component="span" size="sm" variant="soft" color="success">
                  Lowest price
                </Chip>
              }
            >
              2,900 THB
            </Typography>
            <Typography level="body-sm">
              (Only <b>7</b> left in stock!)
            </Typography>
          </div>
          <Button variant="solid" color="danger" size="lg">
            Add to cart
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default SellingProducts;