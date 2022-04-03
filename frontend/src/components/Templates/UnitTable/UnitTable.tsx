import React from 'react';
import { IUnit } from '../../../Context/PostContext';
import Check from '../../Check/Check';
import Image from '../../Image/Image';
import Table from '../../Table/Table';
import TableData from '../../Table/TableData';
import TableHead from '../../Table/TableHead';
import TableRow from '../../Table/TableRow';
import './unitTable.scss';

interface IUnitTableProps {
  data: IUnit[];
}

const UnitTable = (props: IUnitTableProps): JSX.Element => {
  const { data } = props;

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
              Materjal
            </TableHead>
            <TableHead>
              Lisa võrdlusesse
            </TableHead>
          </TableRow>

          {data.map((unit, index) => (
            <TableRow key={unit._id}>
              <TableData>
                {index + 1}
              </TableData>
              <TableData>
                {unit.imageUrl && <Image src={unit.imageUrl} alt={unit.name} size="tiny" />}
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
                {unit.material}
              </TableData>
              <TableData>
                <Check id={unit._id} />
              </TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </div>

  );
};
export default UnitTable;
