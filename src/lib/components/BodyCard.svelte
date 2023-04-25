<script lang="ts">
    import armSvg from "$lib/images/body-arm.svg";
    import coreSvg from "$lib/images/body-core.svg";
    import legSvg from "$lib/images/body-leg.svg";
    import { BodyAreaTypes, type BodyAreaDto } from "../../api";

    export let bodyArea: BodyAreaDto;

    let imgSrc: string;
    switch (bodyArea.bodyAreaId) {
        case BodyAreaTypes.Upper:
            imgSrc = armSvg;
            break;
        case BodyAreaTypes.Core:
            imgSrc = coreSvg;
            break;
        case BodyAreaTypes.Lower:
            imgSrc = legSvg;
            break;
    };

</script>

<div class="card">
    <h5 class="card-header">
        <a href="body/{bodyArea.bodyAreaId}">{bodyArea.name}</a>
    </h5>
    <img src={imgSrc} class="card-img-top" alt="..." />
    <div class="card-body">
        <p class="card-text">
            {bodyArea.description}
        </p>
    </div>
</div>
