const SortingComponent=({sorting,label})=>{
    return(
        <div class="filter-short">
            <label class="filter-label">
                {label}:
            </label>
            <select class="custom-select filter-select" name={label === "Short by seniority" ? "seniority" : "salary"} onChange={(e)=>sorting(e)} style={{width:"100px"}}>
                {/* <option selected="">select</option> */}
                <option selected value="DESC">DESC</option>
                <option value="ASC">ASC</option>
            </select>
        </div>
    )
}

export default SortingComponent;