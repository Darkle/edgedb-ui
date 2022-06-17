type IconProps = React.SVGProps<SVGSVGElement>;

export function CloseIcon(props: IconProps) {
  return (
    <svg
      {...props}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.35881 13.6412C0.837222 14.1196 1.61288 14.1196 2.09129 13.6412L7 8.73248L11.9087 13.6412C12.3871 14.1196 13.1628 14.1196 13.6412 13.6412C14.1196 13.1628 14.1196 12.3871 13.6412 11.9087L8.73249 7L13.6412 2.09129C14.1196 1.61288 14.1196 0.837222 13.6412 0.35881C13.1628 -0.119603 12.3871 -0.119603 11.9087 0.35881L7 5.26751L2.09129 0.35881C1.61288 -0.119603 0.837222 -0.119603 0.35881 0.35881C-0.119603 0.837222 -0.119602 1.61288 0.35881 2.09129L5.26752 7L0.358809 11.9087C-0.119604 12.3871 -0.119603 13.1628 0.35881 13.6412Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ThemeSwitcherIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.99951 1C8.99951 0.447715 9.44723 0 9.99951 0C10.5518 0 10.9995 0.447715 10.9995 1V2C10.9995 2.55228 10.5518 3 9.99951 3C9.44723 3 8.99951 2.55228 8.99951 2V1ZM9.99951 13C11.6564 13 12.9995 11.6569 12.9995 10C12.9995 8.34315 11.6564 7 9.99951 7C8.34266 7 6.99951 8.34315 6.99951 10C6.99951 11.6569 8.34266 13 9.99951 13ZM9.99951 16C13.3132 16 15.9995 13.3137 15.9995 10C15.9995 6.68629 13.3132 4 9.99951 4C6.6858 4 3.99951 6.68629 3.99951 10C3.99951 13.3137 6.6858 16 9.99951 16ZM9.99951 17C9.44723 17 8.99951 17.4477 8.99951 18V19C8.99951 19.5523 9.44723 20 9.99951 20C10.5518 20 10.9995 19.5523 10.9995 19V18C10.9995 17.4477 10.5518 17 9.99951 17ZM15.6567 2.92879C16.0472 2.53826 16.6804 2.53826 17.0709 2.92879C17.4614 3.31931 17.4614 3.95248 17.0709 4.343L16.3638 5.05011C15.9732 5.44063 15.3401 5.44063 14.9496 5.05011C14.559 4.65958 14.559 4.02642 14.9496 3.63589L15.6567 2.92879ZM5.04988 14.9498C4.65936 14.5593 4.02619 14.5593 3.63567 14.9498L2.92856 15.6569C2.53804 16.0474 2.53804 16.6806 2.92856 17.0711C3.31908 17.4616 3.95225 17.4616 4.34277 17.0711L5.04988 16.364C5.4404 15.9735 5.4404 15.3403 5.04988 14.9498ZM19 9C19.5523 9 20 9.44772 20 10C20 10.5523 19.5523 11 19 11H18C17.4477 11 17 10.5523 17 10C17 9.44771 17.4477 9 18 9H19ZM3 10C3 9.44772 2.55228 9 2 9H1C0.447715 9 0 9.44771 0 10C0 10.5523 0.447715 11 1 11H2C2.55228 11 3 10.5523 3 10ZM17.0712 17.0709C16.6807 17.4614 16.0475 17.4614 15.657 17.0709L14.9499 16.3638C14.5594 15.9732 14.5594 15.3401 14.9499 14.9496C15.3404 14.559 15.9736 14.559 16.3641 14.9496L17.0712 15.6567C17.4617 16.0472 17.4617 16.6804 17.0712 17.0709ZM5.05022 5.05037C5.44074 4.65984 5.44074 4.02668 5.05022 3.63615L4.34311 2.92905C3.95259 2.53852 3.31942 2.53852 2.9289 2.92905C2.53837 3.31957 2.53837 3.95274 2.9289 4.34326L3.636 5.05037C4.02653 5.44089 4.65969 5.44089 5.05022 5.05037Z"
        fill="currentColor"
      />
    </svg>
  );
}