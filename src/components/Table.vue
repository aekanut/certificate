<template>
  <div>
    <router-link
      :to="{ name: 'Create' }"
      style="text-decoration: none; color: inherit;"
      ><button type="button" class="btn btn-primary my-3" style="width:80px;">
        New
      </button></router-link
    >
    <div class="table-responsive">
      <table class="text-center table table-hover">
        <thead class="fs-5">
          <tr>
            <th scope="col"><div class="m-2">NO</div></th>
            <th scope="col"><div class="m-2">Serail Number</div></th>
            <th scope="col"><div class="m-2">Common Name</div></th>
            <th scope="col"><div class="m-2">Issue Date</div></th>
            <th scope="col"><div class="m-2">Expire Date</div></th>
            <th scope="col"><div class="m-2">Status</div></th>
          </tr>
        </thead>
        <tbody class="medium">
          <tr v-for="member in members" :key="member.NO" class="body-color">
            <th scope="row">
              <div class="my-1">
                {{ member.NO }}
              </div>
            </th>
            <td>
              <div class="my-1">
                {{ member.serailNumber }}
              </div>
            </td>
            <td>
              <div class="my-1">
                {{ member.commonName }}
              </div>
            </td>
            <td>
              <div class="my-1">
                {{ calDateForm(member.issueDate) }}
              </div>
            </td>
            <td>
              <div class="my-1">
                {{ calDateForm(member.expireDate) }}
              </div>
            </td>
            <td>
              <div class="my-1">
                {{ member.status }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]
export default {
  data() {
    return {
      members: [
        {
          NO: 1,
          serailNumber: "FBA003F",
          commonName: "สุรศักดิ์ สาด๊ะ",
          issueDate: new Date(2021, 3, 1),
          expireDate: new Date(2024, 2, 28),
          status: "Genereted",
        },
        {
          NO: 2,
          serailNumber: "CCBFDA0",
          commonName: "สุรศักดิ์ สาด๊ะ",
          issueDate: new Date(2020, 10, 1),
          expireDate: new Date(2023, 2, 28),
          status: "Revoked",
        },
      ],
      monthNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    }
  },
  methods: {
    calDateForm(date) {
      return `${date.getDate()} ${
        monthNames[date.getMonth()]
      } ${date.getFullYear()}`
    },
  },
}
</script>
<style scoped>
table {
  width: 1000px;
}
thead {
  background-color: #89a9eb;
}
tbody {
  background-color: #cddbf1;
}
thead th:first-child {
  border-radius: 15px 0 0 0;
}
thead th:last-child {
  border-radius: 0 15px 0 0;
}
tbody tr:last-child th:first-child {
  border-radius: 0 0 0 15px;
}
tbody tr:last-child td:last-child {
  border-radius: 0 0 15px 0;
}
</style>
