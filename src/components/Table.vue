<template>
  <FdTable :headers="headers" :items="tableData">
    <template slot="row" slot-scope="{item}">
      <FdTableRow>
        <FdTableCell>{{item.date}}</FdTableCell>
        <FdTableCell>{{item.timeFrom}}</FdTableCell>
        <FdTableCell>{{item.timeTo}}</FdTableCell>
        <FdTableCell>{{item.workedHours}}</FdTableCell>
        <FdTableCell>{{item.reportType}}</FdTableCell>
      </FdTableRow>
    </template>
  </FdTable>
</template>

<script>
  export default {
    name: 'Table',
    data: () => ({
      headers: [
        { label: "Date", sortable: true, sortBy: "date" },
        { label:  "Time from", sortable: true, sortBy: "timeFrom"  },
        { label:  "Time to", sortable: true, sortBy: "timeTo"  },
        { label:  "Worked hours", sortable: true, sortBy: "workedHours"  },
        { label:  "Report type", sortable: true, sortBy: "reportType"  }
      ],
      tableData: [
        { id: "1", date: "30/01/2018", timeFrom: "08:00", timeTo: "17:10", workedHours: "8:30", reportType: "Standard" },
        { id: "2", date: "29/01/2018", timeFrom: "08:30", timeTo: "17:20", workedHours: "8:31", reportType: "Standard" },
        { id: "3", date: "28/01/2018", timeFrom: "08:40", timeTo: "17:50", workedHours: "8:32", reportType: "Standard" },
        { id: "4", date: "27/01/2018", timeFrom: "08:50", timeTo: "17:30", workedHours: "8:35", reportType: "Standard" },
        { id: "5", date: "26/01/2018", timeFrom: "08:21", timeTo: "17:40", workedHours: "8:10", reportType: "Standard" }
      ]
    })
  }
</script>

<style>

</style>
