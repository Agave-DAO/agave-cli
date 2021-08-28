import ethers from 'ethers'
import { tao_voting } from '../dao.mjs'
import abi from './abis/taoVotingABI.mjs'

// 3. create the voting contract we want to interact with
export const TaoVoting = (signer) => {
  return new ethers.Contract(tao_voting, abi, signer)
}
