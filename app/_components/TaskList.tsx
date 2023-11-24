import React from 'react'

function TaskList() {
    return (
        <div className="bg-neutral w-full h-full rounded-box flex flex-col p-4">
            <span
                className="text-neutral-content font-semibold text-3xl text-center pb-4 mb-4 border-primary border-b-4 mx-auto block w-fit"
            >
                Quests
            </span>
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
    )
}

export default TaskList
