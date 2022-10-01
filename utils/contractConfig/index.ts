export const CONTRACT_ADDRESS = '0x8F57f0A049f183A419d788C02c332bA4AcDAC4b5'
export const CONTRACT_ABI = [
	{
		inputs: [
			{
				internalType: 'address payable',
				name: '_newOwner',
				type: 'address',
			},
		],
		name: 'changeOwner',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: '_receivers',
				type: 'address[]',
			},
			{
				internalType: 'uint256',
				name: '_value',
				type: 'uint256',
			},
		],
		name: 'multiSend',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		stateMutability: 'payable',
		type: 'receive',
	},
	{
		inputs: [],
		name: 'withdraw',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		stateMutability: 'payable',
		type: 'fallback',
	},
	{
		inputs: [],
		stateMutability: 'payable',
		type: 'constructor',
	},
	{
		inputs: [],
		name: 'owner',
		outputs: [
			{
				internalType: 'address payable',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'totalSupply',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
]
