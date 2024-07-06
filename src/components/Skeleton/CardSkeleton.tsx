import { Box, Skeleton } from "@mui/material";

export default function CardSkeleton() {
  return (
    <Box>
      <Skeleton
        variant="rectangular"
        width={"100%"}
        height={"auto"}
        sx={{ aspectRatio: 1.77}}
      />
      <Box sx={{ pt: 0.5 }}>
        <Skeleton />
        <Skeleton width="60%" />
      </Box>
    </Box>
  );
}
