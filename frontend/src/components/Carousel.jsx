import { Box } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../components/Carousel.css";

export default function Carousel({
  items = [],
  renderItem,
  slidesPerView = 5,
  spaceBetween = 16,
}) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      loop
      style={{ width: "100%", padding: "0 30px" }}
      breakpoints={{
        0: { slidesPerView: 1.2, spaceBetween: 12 },
        480: { slidesPerView: 2, spaceBetween: 14 },
        768: { slidesPerView: 3, spaceBetween: 16 },
        1024: { slidesPerView: 4, spaceBetween: 20 },
        1280: { slidesPerView: slidesPerView, spaceBetween: spaceBetween },
      }}>
      {items.length > 0 ? (
        items.map((item, index) => (
          <SwiperSlide key={item.id || index}>{renderItem(item)}</SwiperSlide>
        ))
      ) : (
        <SwiperSlide>
          <Box
            sx={{
              height: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "text.secondary",
              fontSize: "1rem",
            }}>
            게시된 도서가 없습니다.
          </Box>
        </SwiperSlide>
      )}
    </Swiper>
  );
}
