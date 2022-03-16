<template>
  <div class="social">
    <yandex-share
      :title="title"
      :description="description"
      :image="image"
      :url="url"
      :services="services"
      :contentByService="contentByService"
      @share="share"
    />

    <div
      class="social__share-wrapper"
      @click="$root.sendGA('internal', 'click', 'obshhij_share')"
    >
      <svg
        class="social__share social__share_static"
        viewBox="0 0 23 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="white"
          d="M15.7854 3.16435C16.7636 3.16435 17.678 3.54258 18.3798 4.215C19.8045 5.62288 19.8045 7.9133 18.3798 9.32118L11.6387 15.9823L4.89758 9.34219C3.4728 7.93431 3.4728 5.64389 4.89758 4.23601C5.57807 3.56359 6.51374 3.18536 7.49194 3.18536C8.47014 3.18536 9.38455 3.56359 10.0863 4.23601L11.6387 5.76997L13.191 4.23601C13.8715 3.54258 14.8072 3.16435 15.7854 3.16435ZM15.7854 1C14.2756 1 12.787 1.56735 11.6387 2.68105C10.4903 1.54634 9.00178 1 7.49194 1C5.98211 1 4.49354 1.56735 3.34521 2.68105C1.06983 4.92944 1.06983 8.62775 3.34521 10.8761L11.6387 19.0712L19.9321 10.8761C22.2075 8.62775 22.2075 4.95046 19.9321 2.68105C18.7838 1.56735 17.274 1 15.7854 1Z"
        />
      </svg>
      <svg
        class="social__share social__share_hover"
        width="26"
        height="23"
        viewBox="0 0 26 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.55395 2.07773C11.1689 2.07879 12.9772 5.99263 12.9772 5.99263C13.5873 4.57802 15.214 2.28739 18.6706 2.15274C18.7474 2.14956 18.8231 2.1485 18.8983 2.1485C22.2151 2.1485 24.4101 5.01801 23.8215 8.3315C23.3831 10.8 21.0828 12.8097 19.425 14.5346C17.4007 16.6421 15.2764 18.6558 13.0449 20.5443C11.2017 18.7663 9.36783 17.1137 7.57289 15.2874C5.88754 13.5725 3.22779 11.398 2.36298 9.09036C1.16351 5.8874 4.02193 2.25902 7.28382 2.08515C7.37475 2.08117 7.46488 2.07773 7.55395 2.07773ZM7.55395 1H7.55289C7.44488 1 7.33635 1.00318 7.22542 1.00954C5.23767 1.11451 3.26566 2.29878 2.07765 4.09879C0.966439 5.78297 0.69977 7.73989 1.34671 9.46621C2.12058 11.5326 4.01766 13.3535 5.69101 14.9601C6.08914 15.342 6.46514 15.7022 6.79768 16.0412C7.96569 17.2295 9.1673 18.3623 10.3294 19.457C10.9806 20.0706 11.6342 20.6866 12.2897 21.318L12.9972 22L13.7473 21.3652C15.9284 19.5199 18.1028 17.4723 20.2095 15.2787C20.4292 15.0504 20.6607 14.8167 20.8972 14.5768C22.4807 12.9769 24.4514 10.9839 24.8893 8.5189C25.2391 6.54633 24.7511 4.59896 23.549 3.17374C22.4037 1.81797 20.7522 1.07051 18.8978 1.07051C18.8082 1.07051 18.7183 1.07263 18.6271 1.07581C15.7068 1.18952 13.9425 2.65582 12.9521 3.93578C11.9409 2.62825 10.158 1.00106 7.55395 1Z"
          fill="white"
          stroke="white"
        />
        <path
          d="M23.7392 9.24002C23.2992 11.71 20.9992 13.72 19.3392 15.44C17.3229 17.5543 15.1931 19.5572 12.9592 21.44C11.1192 19.67 9.28919 18.01 7.48919 16.19C5.68919 14.37 3.14919 12.31 2.27919 10C1.07919 6.80002 3.93919 3.17002 7.19919 3.00002H7.46919C11.0892 2.99002 12.9192 6.91002 12.9192 6.91002C13.3916 5.78605 14.1814 4.82419 15.192 4.14217C16.2026 3.46015 17.3901 3.08757 18.6092 3.07002H18.8392C19.5986 3.06412 20.3494 3.23128 21.0345 3.55881C21.7197 3.88634 22.3212 4.36565 22.7935 4.96034C23.2658 5.55504 23.5964 6.24951 23.7603 6.99104C23.9241 7.73257 23.9169 8.50169 23.7392 9.24002Z"
          fill="white"
          stroke="white"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import YandexShare from "@cookieseater/vue-yandex-share";

export default {
  name: "Social",
  props: {
    res: {
      type: String,
      required: false,
      default: "",
    },
  },
  data() {
    return {
      services: [
        "twitter",
        "telegram",
        "vkontakte",
        "facebook",
        "odnoklassniki",
      ],
    };
  },
  components: {
    YandexShare,
  },
  methods: {
    share(name) {
      this.$root.sendGA("external", "click", `obshhij_share_${name}`);
    },
  },
  computed: {
    ...mapState({
      mobile: (state) => state.common.mobile,
      ios: (state) => state.common.ios,
    }),
    title() {
      let title = "«Выжившие»: постарайся проснуться #проснись";
      if (this.mobile && this.ios) {
        title = encodeURIComponent(
          "«Выжившие»: постарайся проснуться #проснись"
        );
      }
      return title;
    },

    description() {
      let dsc = "Смотрите в Okko сериал о постапокалипсисе";
      if (this.mobile && this.ios) {
        dsc = encodeURIComponent("Смотрите в Okko сериал о постапокалипсисе");
      }
      return dsc;
    },
    image() {
      return `${location.origin}/share/share_default.jpg`;
    },
    url() {
      let url = location.origin + "/";
      return url;
    },
    contentByService() {
      let vkText =
        this.res.length > 0
          ? this.description
          : `${this.title} ${this.description}`;
      let okText = this.res.length > 0 ? "" : this.title;
      return {
        twitter: {
          title: this.title + " " + this.description,
        },
        telegram: {
          title: this.title + " " + this.description,
        },
        vkontakte: {
          title: vkText,
        },
        odnoklassniki: {
          title: okText,
          description: this.description,
        },
      };
    },
  },
};
</script>
