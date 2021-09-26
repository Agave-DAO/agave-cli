import { Contract, ethers } from "ethers"
import report from "yurnalist"
import { getDaoCache, getDaoContext } from "../extensions/crispr-extentions"
import { useFrame } from "../extensions/web3-extentions"

export default async () => {

    const cache = await getDaoCache(3)
    const context = getDaoContext(cache)
    const agreement: Contract = context['agreement.open:0']
    const settingId = await agreement.getCurrentSettingId();

    // TODO: Fix can perform
    // const canPerform = await agreement.canPerform(
    //     ethers.constants.AddressZero,
    //     ethers.constants.AddressZero,
    //     ethers.utils.id("0x0"),
    //     [await useFrame().getAddress()]
    // );

    const spinner = report.activity(
    )
    spinner.tick('Signing Covenant')

    try {
        await (await agreement.sign(settingId)).wait()
        report.success('Covenant Signed!')
    } catch (error) {
        report.error(error.reason)
    }
    spinner.end()

    return 'main'
}