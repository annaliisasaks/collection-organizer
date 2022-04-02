import React from 'react';
import { IUnit } from '../../../data/post/postData';
import Check from '../../Check/Check';
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

        {data.map((unit) => (

          <TableRow>
            <TableData>
              {unit.id}

            </TableData>
            <TableData>
              <img src={unit.image} alt={unit.name} width="60" />

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
              <Check id={unit.id} />

            </TableData>

          </TableRow>
        ))}
      </Table>
    </div>

  );
};
export default UnitTable;
