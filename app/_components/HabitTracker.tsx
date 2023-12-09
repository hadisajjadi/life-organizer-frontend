import React from 'react'
import Card from './Card'
import CardTitle from './CardTitle'

function HabitTracker() {
    return (
        <Card>
            <div className="flex flex-col w-full h-full">
                <CardTitle text="Habits" />
                <div className="flex-1 overflow-y-auto">
                    <div className="form-control w-full">
                        <label className="label cursor-pointer">
                            <span className="label-text">Remember me</span>
                            <input type="checkbox" defaultChecked={true} className="checkbox checkbox-primary" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label cursor-pointer">
                            <span className="label-text">Remember me</span>
                            <input type="checkbox" defaultChecked={true} className="checkbox checkbox-primary" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label cursor-pointer">
                            <span className="label-text">Remember me</span>
                            <input type="checkbox" defaultChecked={true} className="checkbox checkbox-primary" />
                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label cursor-pointer">
                            <span className="label-text">Remember me</span>
                            <input type="checkbox" defaultChecked={true} className="checkbox checkbox-primary" />
                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label cursor-pointer">
                            <span className="label-text">Remember me</span>
                            <input type="checkbox" defaultChecked={true} className="checkbox checkbox-primary" />
                        </label>
                    </div>

                </div>

                <div className='pt-4'>
                    <button className="btn btn-primary w-full">New Habit</button>
                </div>
            </div>
        </Card>
    )
}

export default HabitTracker
