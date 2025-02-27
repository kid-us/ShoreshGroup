import { CurrentAssets } from "../../services/assets";

interface Props {
  asset: CurrentAssets;
}

const CurrentDescription = ({ asset }: Props) => {
  return (
    <>
      {asset && (
        <>
          <p className="mb-2">{asset.desc}</p>
          <p className="mb-2">{asset.desc2}</p>
          <p className="mb-2">{asset.desc3}</p>
          <p className="mb-2">{asset.desc4}</p>
          <p className="mb-2">{asset.desc5}</p>
        </>
      )}
    </>
  );
};

export default CurrentDescription;
