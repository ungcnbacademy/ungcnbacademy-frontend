import React, { useState } from 'react';
import styles from './table.module.css';
import Empty from '../empty/empty';
import LoadingDots from '../loading/loadingDots';

export default function Table({
	columns = [{ title: '', key: '', dataIndex: '', render: () => {} }],
	dataSource = [],
	loading = false,
	onRowSelect,
}) {
	const [selectedRows, setSelectedRows] = useState(null);
	const handleRowClick = (rowData) => {
		if (!onRowSelect) return;
    setSelectedRows((prevSelectedRows) => {
      const updatedRows = { ...prevSelectedRows };
      if (updatedRows[rowData.key]) {
        delete updatedRows[rowData.key];
      } else {
        updatedRows[rowData.key] = rowData;
      }

      if (onRowSelect) {
        const selectedArray = Object.values(updatedRows);
        onRowSelect(selectedArray);
      }
      return updatedRows;
    });
  };

	const tableRender = () => {
		return (
			<table className={styles.table}>
				<thead>
					<tr className={styles.tableRow}>
						{columns.map((column, index) => (
							<th className={styles.tableHeader} key={index}>
								{column.title}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{dataSource.map((item, index) => (
						<tr key={index}
							className={`${styles.tableRow} ${selectedRows?.[index]?.key === index  && styles.selected} ${onRowSelect && styles.onRowSelectOnClick}`}
							onClick={() => handleRowClick({...item, key: index} )} >

							{columns.map((column, index) => (
								<td className={styles.tableData} key={index}>
									{column.render
										? column.render(
												item[column.dataIndex],
												item
										  )
										: item[column.dataIndex]}
								</td>
								))
							}
						</tr>
					))}
				</tbody>
			</table>
		);
	};
	return (
		<div className={styles.main}>
			{loading && <LoadingDots />}
			{dataSource.length === 0 && !loading && <Empty />}
			{dataSource.length > 0 && !loading && tableRender()}
		</div>
	);
}

