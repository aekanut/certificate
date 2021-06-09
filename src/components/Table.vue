<template>
    <div>
        {{ members[0].issueDate }}
    </div>
</template>
<script>
export default {
    data() {
        return {
            members: [
                {
                    NO: 1,
                    serailNumber: 'FBA003F',
                    commonName: 'สุรศักดิ์ สาด๊ะ',
                    issueDate: Date(2021, 3, 1),
                    expireDate: Date(2024, 2, 28),
                    status: 'Genereted'
                },
                {
                    NO: 2,
                    serailNumber: 'CCBFDA0',
                    commonName: 'สุรศักดิ์ สาด๊ะ',
                    issueDate: Date(2020, 10, 1),
                    expireDate: Date(2023, 2, 28),
                    status: 'Revoked'
                }
            ]
        }
    }
}
</script>
<style scoped>
    
</style>