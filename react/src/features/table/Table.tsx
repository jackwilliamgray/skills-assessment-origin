import React, { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { addItem, selectResult } from './tableSlice';

function createData(rank: number, name: string, priceUsd: string, changePercent24Hr: string) {
	return { rank, name, priceUsd, changePercent24Hr };
}

export function DataTable() {
	const data = useAppSelector(selectResult);
	const [ tableData, setTableData ] = useState<any[]>([]);
	const [ rankField, setRankField ] = useState<number>(0);
	const [ nameField, setNameField ] = useState<string>('');
	const [ priceUsdField, setPriceUsdField ] = useState<string>('');
	const [ changePercent24HrField, setChangePercent24HrField ] = useState<string>('');
	const dispatch = useAppDispatch();
	useEffect(
		() => {
			setTableData(data);
		},
		[ data ]
	);

	return (
		<div>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
					<TableHead>
						<TableRow>
							<TableCell>Rank</TableCell>
							<TableCell align="right">Name</TableCell>
							<TableCell align="right">Price USD</TableCell>
							<TableCell align="right">Change Percent (24hr)</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{tableData.map((row: any) => (
							<TableRow key={row.rank} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell component="th" scope="row">
									{row.rank}
								</TableCell>
								<TableCell align="right">{row.name}</TableCell>
								<TableCell align="right">{row.priceUsd}</TableCell>
								<TableCell align="right">{row.changePercent24Hr}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<Stack spacing={2} direction="row">
				<TextField
					id="rank-field"
					onChange={(e) => setRankField(Number(e.target.value))}
					type="Number"
					label="Rank"
					variant="standard"
				/>
				<TextField
					id="name-field"
					onChange={(e) => setNameField(e.target.value)}
					label="Name"
					variant="standard"
				/>
				<TextField
					id="price-field"
					onChange={(e) => setPriceUsdField(e.target.value)}
					label="Price USD"
					variant="standard"
				/>
				<TextField
					id="change-field"
					onChange={(e) => setChangePercent24HrField(e.target.value)}
					label="Change Percent (24hr)"
					variant="standard"
				/>
				<Button
					variant="contained"
					onClick={() =>
						dispatch(addItem(createData(rankField, nameField, priceUsdField, changePercent24HrField)))}
				>
					Add Item
				</Button>
			</Stack>
		</div>
	);
}
