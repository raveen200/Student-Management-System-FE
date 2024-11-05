import {
  Drawer,
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Button,
  Divider,
} from "@mui/material";
import { X, Trash2 } from "lucide-react";
import { cartState as state } from "../../constants/index";
// eslint-disable-next-line react/prop-types
export default function CartDrawer({ open, onClose }) {
  const handleRemoveItem = (id) => {
    // Remove item from cart
    console.log("Removing item with id: ", id);
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box
        sx={{
          width: 360,
          p: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Typography variant="h6">Shopping Cart</Typography>
          <IconButton onClick={onClose} size="small">
            <X size={20} />
          </IconButton>
        </Box>

        {state.items.length === 0 ? (
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 2,
              color: "text.secondary",
            }}
          >
            <Typography variant="body1">Your cart is empty</Typography>
            <Button variant="outlined" onClick={onClose}>
              Browse Courses
            </Button>
          </Box>
        ) : (
          <>
            <List sx={{ flex: 1, overflow: "auto" }}>
              {state.items.map((item) => (
                <ListItem
                  key={item.id}
                  alignItems="flex-start"
                  secondaryAction={
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Typography variant="body2" color="primary">
                        ${item.price}
                      </Typography>
                      <IconButton
                        edge="end"
                        size="small"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <Trash2 size={16} />
                      </IconButton>
                    </Box>
                  }
                >
                  <ListItemAvatar>
                    <Avatar src={item.image} variant="rounded" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.title}
                    secondary={item.instructor}
                  />
                </ListItem>
              ))}
            </List>

            <Box sx={{ pt: 2 }}>
              <Divider />
              <Box
                sx={{
                  my: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="subtitle1">Total:</Typography>
                <Typography variant="h6" color="primary">
                  ${state.total}
                </Typography>
              </Box>
              <Button
                variant="contained"
                fullWidth
                size="large"
                onClick={() => {
                  // Handle checkout
                  console.log("Proceeding to checkout");
                }}
              >
                Proceed to Checkout
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Drawer>
  );
}
