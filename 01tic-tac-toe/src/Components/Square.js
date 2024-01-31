import React, { useState } from 'react'

export default function Square({value,handleClick}) {

    return (
        <div>
            <button
                className='square'
                onClick={handleClick}>{value}</button>

        </div>
    )
}
