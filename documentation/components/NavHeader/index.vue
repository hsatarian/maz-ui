<template>
  <header
    class="header maz-flex-fixed maz-bg-color maz-border-color maz-border-bottom-1 maz-border-bottom-solid"
    role="banner"
  >
    <nav
      :class="[isDocPage ? 'maz-px-4' : 'maz-container' ]"
      class="maz-flex maz-space-between"
    >
      <NuxtLink
        :to="{
          name: 'index'
        }"
        class="maz-flex header__logo maz-py-2 maz-align-center"
      >
        <LogoSvg class="header__logo__img maz-mr-2" />
        <div
          class="header__title maz-flex maz-justify-center maz-direction-column maz-hidden-tablet maz-position-relative"
        >
          <h1 class="maz-fs-20">
            Maz UI
          </h1>
          <h2 class="maz-fs-14 header__title__sub maz-text-color">
            UI Components Library
          </h2>
        </div>
      </NuxtLink>
      <div
        role="navigation"
        class="header__menu maz-flex maz-align-center maz-hidden-mobile"
      >
        <NuxtLink
          class="header__menu__item maz-btn maz-btn--white maz-no-shadow maz-bg-color maz-no-border maz-hover-bg-color maz-mr-1"
          :to="{
            name: 'documentation'
          }"
        >
          Documentation
        </NuxtLink>
        <NuxtLink
          class="header__menu__item maz-btn maz-btn--white maz-no-shadow maz-bg-color maz-no-border maz-hover-bg-color"
          :to="{ name: 'made-with-maz-ui' }"
        >
          Made with Maz UI
        </NuxtLink>
      </div>
      <div class="maz-flex maz-align-center maz-hidden-mobile">
        <SocialButtons class="maz-hidden-laptop-s" />
      </div>
      <MazResponsiveMenu
        :routes="routes"
        class="maz-py-2 maz-show-mobile"
        role="navigation"
      />
    </nav>
    <DarkSwitchBanner />
  </header>
</template>

<script>
import LogoSvg from '@/components/LogoSvg'
import SocialButtons from '@/components/SocialButtons'
import DarkSwitchBanner from '@/components/DarkSwitchBanner'

export default {
  name: 'Header',
  components: {
    LogoSvg,
    SocialButtons,
    DarkSwitchBanner
  },
  data () {
    return {
      routes: [
        { label: 'Home', name: 'index' },
        { label: 'Documentation', name: 'documentation-get-started' },
        { label: 'Mad with Maz Ui', name: 'made-with-maz-ui' }
      ]
    }
  },
  computed: {
    isDocPage () {
      return this.$route.matched.some(m => m.name === 'documentation')
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    z-index: 10;

    nav {
      transition: all 500ms ease-in-out;
    }

    &__logo {
      text-decoration: none;

      &__img {
        width: 100px;
        height: 40px;
      }
    }

    &__menu {
      &__item {
        font-weight: 500;
        transition: all .5s;
        outline: none;

        &.nuxt-link-active {
          color: $primary-color;
        }
      }
    }

    &__title {
      &__sub {
        color: $muted-color;
      }
    }
  }

  .maz-is-dark {
    .header__menu__item:not(.nuxt-link-active) {
      color: white;
    }
  }
</style>
