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
import { setCartCourses } from "../../redux/Slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addEnrollmentAction,  } from "../../redux/Actions";

import { toast } from "react-toastify";
// eslint-disable-next-line react/prop-types
export default function CartDrawer({ open, onClose }) {
  const cartData = useSelector((state) => state.mgt.cartCourses);
  const [total, setTotal] = useState(null);
  const dispatch = useDispatch();


  useEffect(() => {
    setTotal(cartData?.reduce((sum, item) => sum + item.price, 0));
  }, [cartData]);

 ;

  const handleRemoveItem = (_id) => {
    const updatedCartData = cartData.filter((item) => item._id !== _id);
    dispatch(setCartCourses(updatedCartData));
  };

  const handleBuy = async () => {
    const courseIds = cartData.map((item) => item._id);
    try {
      const response = await dispatch(addEnrollmentAction(courseIds)).unwrap();
      if (response) {
        toast.success("Enrollment successful");
      }

      dispatch(setCartCourses([]));
    } catch (error) {
      console.error("Add enrollment error:", error);
      toast.error("Enrollment failed");
    }
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

        {cartData?.length === 0 ? (
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
              {cartData?.map((item) => (
                <ListItem
                  key={item._id}
                  alignItems="flex-start"
                  secondaryAction={
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Typography variant="body2" color="primary">
                        ${item.price}
                      </Typography>
                      <IconButton
                        edge="end"
                        size="small"
                        onClick={() => handleRemoveItem(item._id)}
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
                  ${total}
                </Typography>
              </Box>
              <Button
                variant="contained"
                fullWidth
                size="large"
                onClick={handleBuy}
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
