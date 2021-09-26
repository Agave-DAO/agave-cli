import Table from "cli-table3"
import { getDaoCache } from "../extensions/crispr-extentions"

export default async () => {
    const cache = await getDaoCache(3)
    const table = new Table({ head: ['App', 'Permission', 'Grantee', 'Manager'] })

    for (let [app, context] of cache) {
        const permissions = context.permissions
        for (let [permission, settings] of permissions) {
            const manager = settings['manager']
            const grantees = settings['grantees']
            for (let grantee of grantees.values()) {
                table.push(
                    [app, permission, grantee, manager]
                )
            }
        }
    }

    console.log(table.toString())


    return 'main'
}