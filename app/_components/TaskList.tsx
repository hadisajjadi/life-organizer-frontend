import React from 'react'
import CardTitle from './CardTitle'
import Card from './Card'

function TaskList() {
    return (
        <Card>
            <div className="w-full h-full flex flex-col">
                <CardTitle text="Quests" />
                <div className="flex-1 overflow-auto">
                    <div className="form-control">
                        <label className="label cursor-pointer justify-start">
                            <input type="checkbox" checked={true} className="checkbox checkbox-primary" />
                            <span className="label-text ms-4">Some Task</span>
                        </label>
                    </div>

                    <div className="form-control">
                        <label className="label cursor-pointer justify-start">
                            <input type="checkbox" checked={true} className="checkbox checkbox-primary" />
                            <span className="label-text ms-4">Some Task</span>
                        </label>
                    </div>

                    <div className="form-control">
                        <label className="label cursor-pointer justify-start">
                            <input type="checkbox" checked={true} className="checkbox checkbox-primary" />
                            <span className="label-text ms-4">Some Task</span>
                        </label>
                    </div>

                    <div className="form-control">
                        <label className="label cursor-pointer justify-start">
                            <input type="checkbox" checked={true} className="checkbox checkbox-primary" />
                            <span className="label-text ms-4">Some Task</span>
                        </label>
                    </div>

                    <div className="form-control">
                        <label className="label cursor-pointer justify-start">
                            <input type="checkbox" checked={true} className="checkbox checkbox-primary" />
                            <span className="label-text ms-4">Some Task</span>
                        </label>
                    </div>

                    <div className="form-control">
                        <label className="label cursor-pointer justify-start">
                            <input type="checkbox" checked={true} className="checkbox checkbox-primary" />
                            <span className="label-text ms-4">Some Task</span>
                        </label>
                    </div>
                </div>
                <div className="pt-4">
                    <form action="">
                        <input type="text" placeholder="Add a quest" className="input input-bordered w-full" />
                        <input type="submit" value="Add" className="btn btn-primary mt-4 w-full" />
                    </form>
                </div>
            </div>

        </Card>
    )
}

export default TaskList
