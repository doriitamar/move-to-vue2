<template>
    <div>
        <article class="message is-info">
            <div class="message-header">
                <p>Convoy description</p>
                <button class="delete" aria-label="delete" @click="$emit('close:description')"></button>
            </div>
            <div class="message-body">
                <div class="columns is-multiline is-mobile">
                    <div class="column is-3" v-for="property in properties">
                        <strong>{{property.displayName}}</strong> <br/> {{convoy[property.realName]}}
                    </div>
                </div>
            </div>
        </article>
        <div class="column is-4 is-offset-4">
            <a class="button is-warning" @click="convoy.inMotion = true; convoy.arrived = false;">Departed</a>
            <a class="button is-success" @click="convoy.inMotion = false; convoy.arrived = true;">Arrived</a>
        </div>
    </div> 
</template>

<script>
export default {
  name: 'convoy-description',
  props: ['properties', 'convoy']
}
</script>
