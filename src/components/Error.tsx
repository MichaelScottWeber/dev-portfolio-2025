type ErrorProps = {
  error: string;
};

function Error({ error }: ErrorProps) {
  return <div>Error: {error}</div>;
}

export default Error;
