type MWLogoProps = {
  classNames?: string;
};

function MWLogo({ classNames }: MWLogoProps) {
  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 640 480'
      className={classNames}
    >
      <g transform='matrix(0.799323,0,0,0.799323,-2398.37,-2803.42)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          fill='currentColor'
          d='M3699.2,3567.1c0-33-26.8-59.9-59.9-59.9h-478.9c-33,0-59.9,26.8-59.9,59.9V4046
        c0,33,26.8,59.9,59.9,59.9h478.9c33.1,0,59.9-26.8,59.9-59.9V3567.1z M3419.5,3776.9v-165l-192.2,193v193l154.4-155.1v165
        l192.2-193v-193L3419.5,3776.9z'
        />
      </g>
    </svg>
  );
}

export default MWLogo;
