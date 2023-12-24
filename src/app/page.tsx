"use client"
import InputBox from './component/component'
import { useState } from 'react'
import useCurrencyInfo from './hooks/hooks'

export default function Home() {
  const [amount, setAmount] = useState(0)
  const [from , setFrom ] = useState('usd')
  const [to , setTo ] = useState('pkr')
  const [convertedamount , setConvertedAmount ] = useState(0)

  const CoversionValues = useCurrencyInfo(from)
  const Option = Object.keys(CoversionValues)
  const swap = () =>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedamount)
  }

  const Convert = () =>{
    setConvertedAmount(amount*CoversionValues[to])
  }
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                onSubmit={(e)=>{
                  e.preventDefault()
                  Convert()
                }}
                >
                    <div className="w-full mb-1">
                      <InputBox
                      label='From'
                      amount={amount}
                      CurrencyOption={Option}
                      SelectCurrency={from}
                      onCurrencyChange={(currency:any)=>setFrom(currency)}
                      onAmountChange={(amount:any)=>setAmount(amount)}
                      />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                        onClick={swap}
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                    <InputBox
                      label='To'
                      amount={convertedamount}
                      CurrencyOption={Option}
                      SelectCurrency={to}
                      onCurrencyChange={(currency:any)=>setTo(currency)}
                      amountDisable
                      />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert: {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}
