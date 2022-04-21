import { NextPageContext } from 'next';

interface ErrorComponentProps {
  statusCode?: number;
}

const Error = ({ statusCode }: ErrorComponentProps) => {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
