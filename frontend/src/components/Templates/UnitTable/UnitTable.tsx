import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IUnit } from '../../../Context/AppContext';
import Check from '../../Check/Check';
import Image from '../../Image/Image';
import Table from '../../Table/Table';
import TableData from '../../Table/TableData';
import TableHead from '../../Table/TableHead';
import TableRow from '../../Table/TableRow';
import './unitTable.scss';

interface IUnitTableProps {
  data: IUnit[];
  pageLimit: number;
  currentPage: number;
}

const UnitTable = (props: IUnitTableProps): JSX.Element => {
  const { data, pageLimit, currentPage } = props;
  const navigate = useNavigate();

  return (
    <div className="table__wrapper">

      <Table>
        <tbody>
          <TableRow>
            <TableHead>
              Nr
            </TableHead>
            <TableHead>
              Pilt
            </TableHead>
            <TableHead>
              Nimi
            </TableHead>
            <TableHead>
              Seisukord
            </TableHead>
            <TableHead>
              Asukoht
            </TableHead>
            <TableHead>
              Suurus
            </TableHead>
            <TableHead>
              Kuju
            </TableHead>
            <TableHead>
              Materjal
            </TableHead>
            <TableHead>
              Lisa võrdlusesse
            </TableHead>
          </TableRow>

          {data.map((unit, index) => {
            const coverImage = unit.images.find((i) => i.isCoverImage);
            return (
              <TableRow onClick={() => navigate(`/kirje/${unit._id}`)} key={unit._id}>
                <TableData>
                  {(currentPage - 1) * pageLimit + (index + 1)}
                </TableData>
                <TableData>
                  {coverImage
                    ? <Image src={coverImage.imageUrl} alt={unit.name} size="tiny" />
                    : unit.images && <Image src={unit.images[0].imageUrl} alt={unit.name} size="tiny" />}
                </TableData>
                <TableData>
                  {unit.name}
                </TableData>
                <TableData>
                  {unit.condition}
                </TableData>
                <TableData>
                  {unit.location}
                </TableData>
                <TableData>
                  {unit.size}
                </TableData>
                <TableData>
                  {unit.shape}
                </TableData>
                <TableData>
                  {unit.material}
                </TableData>
                <TableData>
                  <Check id={unit._id} />
                </TableData>
              </TableRow>
            );
          })}
        </tbody>
      </Table>
    </div>

  );
};
export default UnitTable;
