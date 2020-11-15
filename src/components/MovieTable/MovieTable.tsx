import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { IPlanets } from '../../api/api.types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import styles from './MovieTable.module.scss'
import _ from 'lodash';

const useStyles = makeStyles({
  TableContainer: {
    boxShadow: 'none',
  },
  table: {
    minWidth: 650,
    '& td': {
      borderBottom: 'none',
    }
  },
  head: {
    '& th': {
      fontSize: '0.8rem',
      color: 'black',
      '&:first-child': {
        color: '#00687F',
      }
    }
  },
  name: {
    color: '#00687F',
  }
});

const headers = ["Planet Name", "Rotation Period", "Orbital period", "Diameter", "Climate", "Surface water", "Population"];

interface IMovieTable {
  rows: IPlanets[]
}

const MovieTable = ({ rows }: IMovieTable) => {
  const matchesResponsive = useMediaQuery('(max-width:600px)')
  const mobileTableMap = rows.map(row => _.values(_.omit(row, 'url'))) //arr[][] of planet data values
  const classes = useStyles();

  if (matchesResponsive) {
    return (
      <div key='moblieTable' className={styles.MobileMainTablesContainer}>
        {mobileTableMap.map(row => (
          <div key={row[0]} className={styles.MovieGrid}>
            {row.map((value, i) => (<React.Fragment key={value}>
              <div className={styles.category}>{headers[i]}</div>
              <div className={`${styles.value} ${i===0 && styles.name}`}>{value}</div>
            </React.Fragment>))
            }
          </div>
        ))}
      </div>
    )
  }

  return (
    <TableContainer key='deskTable' id="Container" className={classes.TableContainer} component={Paper}>
      <Table size='small' className={classes.table} aria-label="simple table">
        <TableHead className={classes.head}>
          <TableRow>
            {headers.map((header, i) => <TableCell key={`${i}_${header}`}>{header}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell className={classes.name}>{row.name}</TableCell>
              <TableCell >{row.rotation_period}</TableCell>
              <TableCell >{row.orbital_period}</TableCell>
              <TableCell >{row.diameter}</TableCell>
              <TableCell >{row.climate}</TableCell>
              <TableCell >{row.surface_water}</TableCell>
              <TableCell >{row.population}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MovieTable;