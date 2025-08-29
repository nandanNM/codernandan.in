export function CoderNandanMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M192 256H64v-64h128v64ZM64 192H0V64h64v128ZM192 64H64V0h128v64Z M256 256V0h64l64 128V0h64v256h-64l-64-128v128h-64Z"
      />
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="${color}"  d="M192 256H64v-64h128v64ZM64 192H0V64h64v128ZM192 64H64V0h128v64Z
       M256 256V0h64l64 128V0h64v256h-64l-64-128v128h-64Z"/></svg>`;
}
